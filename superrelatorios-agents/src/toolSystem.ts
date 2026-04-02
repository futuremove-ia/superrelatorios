import { exec } from "child_process";
import { promisify } from "util";
import { readFile, writeFile, readdir } from "fs/promises";
import { join } from "path";
import { glob as globAsync } from "glob";

const execAsync = promisify(exec);

export interface Tool {
  name: string;
  description: string;
  params: ToolParam[];
  execute: (params: Record<string, unknown>) => Promise<ToolResult>;
}

export interface ToolParam {
  name: string;
  type: "string" | "number" | "boolean" | "array" | "object";
  required: boolean;
  description: string;
}

export interface ToolResult {
  success: boolean;
  data?: unknown;
  error?: string;
  logs: string[];
}

export class AgentTools {
  private tools: Map<string, Tool> = new Map();

  constructor() {
    this.registerDefaultTools();
  }

  private registerDefaultTools(): void {
    this.register({
      name: "read_file",
      description: "Read contents of a file",
      params: [
        {
          name: "path",
          type: "string",
          required: true,
          description: "Absolute path to file",
        },
        {
          name: "offset",
          type: "number",
          required: false,
          description: "Line offset",
        },
        {
          name: "limit",
          type: "number",
          required: false,
          description: "Max lines",
        },
      ],
      execute: async (params) => {
        try {
          const content = await readFile(params.path as string, "utf-8");
          const offset = (params.offset as number) || 0;
          const limit = (params.limit as number) || 2000;
          const lines = content.split("\n").slice(offset, offset + limit);
          return {
            success: true,
            data: lines.join("\n"),
            logs: [`Read ${params.path}`],
          };
        } catch (error) {
          return { success: false, error: String(error), logs: [] };
        }
      },
    });

    this.register({
      name: "write_file",
      description: "Write content to a file",
      params: [
        {
          name: "path",
          type: "string",
          required: true,
          description: "Absolute path",
        },
        {
          name: "content",
          type: "string",
          required: true,
          description: "Content to write",
        },
      ],
      execute: async (params) => {
        try {
          await writeFile(params.path as string, params.content as string);
          return {
            success: true,
            data: { path: params.path },
            logs: [`Wrote ${params.path}`],
          };
        } catch (error) {
          return { success: false, error: String(error), logs: [] };
        }
      },
    });

    this.register({
      name: "glob",
      description: "Find files matching pattern",
      params: [
        {
          name: "pattern",
          type: "string",
          required: true,
          description: "Glob pattern",
        },
        {
          name: "cwd",
          type: "string",
          required: false,
          description: "Working directory",
        },
      ],
      execute: async (params) => {
        try {
          const files = await globAsync(params.pattern as string, {
            cwd: (params.cwd as string) || process.cwd(),
          });
          return {
            success: true,
            data: files,
            logs: [`Found ${files.length} files`],
          };
        } catch (error) {
          return { success: false, error: String(error), logs: [] };
        }
      },
    });

    this.register({
      name: "bash",
      description: "Execute bash command",
      params: [
        {
          name: "command",
          type: "string",
          required: true,
          description: "Command to execute",
        },
        {
          name: "cwd",
          type: "string",
          required: false,
          description: "Working directory",
        },
        {
          name: "timeout",
          type: "number",
          required: false,
          description: "Timeout in ms",
        },
      ],
      execute: async (params) => {
        try {
          const { stdout, stderr } = await execAsync(params.command as string, {
            cwd: (params.cwd as string) || process.cwd(),
            timeout: (params.timeout as number) || 60000,
          });
          return {
            success: true,
            data: { stdout, stderr },
            logs: [params.command as string],
          };
        } catch (error: unknown) {
          const err = error as {
            stdout?: string;
            stderr?: string;
            message?: string;
          };
          return {
            success: false,
            error: err.message || String(error),
            data: { stdout: err.stdout, stderr: err.stderr },
            logs: [params.command as string],
          };
        }
      },
    });

    this.register({
      name: "grep",
      description: "Search for pattern in files",
      params: [
        {
          name: "pattern",
          type: "string",
          required: true,
          description: "Regex pattern",
        },
        {
          name: "path",
          type: "string",
          required: false,
          description: "Directory to search",
        },
        {
          name: "include",
          type: "string",
          required: false,
          description: "File pattern",
        },
      ],
      execute: async (params) => {
        try {
          const { stdout } = await execAsync(
            `rg "${params.pattern}" ${params.path ? params.path : "."} ${params.include ? `--include ${params.include}` : ""} --json`,
            { timeout: 30000 },
          );
          const results = stdout
            .split("\n")
            .filter(Boolean)
            .map((line) => JSON.parse(line));
          return {
            success: true,
            data: results,
            logs: [`Found ${results.length} matches`],
          };
        } catch (error) {
          return { success: false, error: String(error), logs: [] };
        }
      },
    });

    this.register({
      name: "list_directory",
      description: "List directory contents",
      params: [
        {
          name: "path",
          type: "string",
          required: true,
          description: "Directory path",
        },
      ],
      execute: async (params) => {
        try {
          const files = await readdir(params.path as string);
          return {
            success: true,
            data: files,
            logs: [`Listed ${params.path}`],
          };
        } catch (error) {
          return { success: false, error: String(error), logs: [] };
        }
      },
    });
  }

  register(tool: Tool): void {
    this.tools.set(tool.name, tool);
  }

  getTool(name: string): Tool | undefined {
    return this.tools.get(name);
  }

  getAllTools(): Tool[] {
    return Array.from(this.tools.values());
  }

  async executeTool(
    name: string,
    params: Record<string, unknown>,
  ): Promise<ToolResult> {
    const tool = this.tools.get(name);
    if (!tool) {
      return { success: false, error: `Tool ${name} not found`, logs: [] };
    }
    return tool.execute(params);
  }

  async executeChain(
    toolCalls: { tool: string; params: Record<string, unknown> }[],
  ): Promise<ToolResult[]> {
    const results: ToolResult[] = [];
    for (const call of toolCalls) {
      const result = await this.executeTool(call.tool, call.params);
      results.push(result);
      if (!result.success) {
        break;
      }
    }
    return results;
  }
}

export const agentTools = new AgentTools();

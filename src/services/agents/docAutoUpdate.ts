import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

export interface DocUpdate {
  type: "task_complete" | "agent_update" | "new_knowledge" | "skill_created";
  agentId?: string;
  taskName?: string;
  description?: string;
  status: "✅" | "⏳" | "❌";
}

export class DocumentationAutoUpdate {
  private docPath: string;

  constructor(docPath = "knowledge/AGENT_COORDINATION.md") {
    this.docPath = resolve(process.cwd(), docPath);
  }

  async updateTaskStatus(update: DocUpdate): Promise<void> {
    try {
      let content = readFileSync(this.docPath, "utf-8");

      if (update.type === "task_complete" && update.taskName) {
        content = this.updateTaskTable(content, update);
      } else if (update.type === "agent_update" && update.agentId) {
        content = this.updateAgentTable(content, update);
      }

      writeFileSync(this.docPath, content, "utf-8");
    } catch (error) {
      console.warn("Failed to update documentation:", error);
    }
  }

  private updateTaskTable(content: string, update: DocUpdate): string {
    const taskName = update.taskName || "";
    const lines = content.split("\n");
    const updated = lines.map((line) => {
      if (line.includes(taskName) && line.includes("|")) {
        const cols = line.split("|").map((c) => c.trim());
        const nameCol = cols.find((c) => c.includes(taskName));
        if (nameCol) {
          const idx = cols.indexOf(nameCol);
          if (idx > -1 && idx < cols.length - 1) {
            cols[cols.length - 2] = update.status;
            return cols.join(" | ");
          }
        }
      }
      return line;
    });
    return updated.join("\n");
  }

  private updateAgentTable(content: string, update: DocUpdate): string {
    const agentId = update.agentId || "";
    const lines = content.split("\n");
    const updated = lines.map((line) => {
      if (line.includes(agentId) && line.includes("|")) {
        const cols = line.split("|").map((c) => c.trim());
        const idCol = cols.find((c) => c.includes(agentId));
        if (idCol) {
          const idx = cols.indexOf(idCol);
          if (idx > -1 && idx < cols.length - 1) {
            cols[cols.length - 1] = update.status;
            return cols.join(" | ");
          }
        }
      }
      return line;
    });
    return updated.join("\n");
  }

  addKnowledge(category: string, knowledge: string): void {
    try {
      let content = readFileSync(this.docPath, "utf-8");
      const timestamp = new Date().toISOString().split("T")[0];
      const entry = `\n### ${timestamp} - ${category}\n- ${knowledge}`;

      const knowledgeSection = "## CONHECIMENTO COMPARTILHADO";
      if (content.includes(knowledgeSection)) {
        content = content.replace(
          knowledgeSection,
          `${knowledgeSection}${entry}`,
        );
      }

      writeFileSync(this.docPath, content, "utf-8");
    } catch (error) {
      console.warn("Failed to add knowledge:", error);
    }
  }
}

export const docAutoUpdate = new DocumentationAutoUpdate();

import { randomUUID } from "crypto";

export interface LLMMessage {
  role: "system" | "user" | "assistant" | "tool";
  content: string;
  toolCallId?: string;
  toolCalls?: LLMToolCall[];
}

export interface LLMToolCall {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
}

export interface LLMResponse {
  id: string;
  content: string;
  toolCalls?: LLMToolCall[];
  finishReason: "stop" | "length" | "tool_calls" | "content_filter" | "error";
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
}

export interface LLMConfig {
  provider: "gemini" | "openai" | "openrouter";
  model: string;
  apiKey: string;
  baseUrl?: string;
  maxTokens?: number;
  temperature?: number;
}

export interface AgentThought {
  thought: string;
  reasoning: string;
  plan: string[];
  critique: string;
  toolCalls?: { tool: string; params: Record<string, unknown> }[];
}

export class LLMIntegration {
  private config: LLMConfig | null = null;
  private systemPrompt: string = "";

  configure(config: LLMConfig): void {
    this.config = config;
  }

  setSystemPrompt(prompt: string): void {
    this.systemPrompt = prompt;
  }

  async chat(messages: LLMMessage[]): Promise<LLMResponse> {
    if (!this.config) {
      return this.mockResponse(messages);
    }

    const { provider, model, apiKey, baseUrl, maxTokens, temperature } =
      this.config;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (provider === "openrouter") {
      headers["Authorization"] = `Bearer ${apiKey}`;
    } else if (provider === "openai") {
      headers["Authorization"] = `Bearer ${apiKey}`;
    }

    const url = baseUrl || this.getProviderUrl(provider);

    const body: Record<string, unknown> = {
      model,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
      max_tokens: maxTokens || 2048,
      temperature: temperature || 0.7,
    };

    if (provider === "gemini") {
      body.systemInstruction = { parts: [{ text: this.systemPrompt }] };
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`LLM API error: ${response.status} - ${error}`);
      }

      const data = await response.json();
      return this.parseResponse(provider, data);
    } catch (error) {
      console.error("LLM request failed:", error);
      return this.mockResponse(messages);
    }
  }

  async chatWithTools(
    messages: LLMMessage[],
    availableTools: { name: string; description: string; params: unknown[] }[],
  ): Promise<{
    content: string;
    toolCalls?: { tool: string; params: Record<string, unknown> }[];
  }> {
    const response = await this.chat(messages);

    if (response.toolCalls && response.toolCalls.length > 0) {
      const toolCalls = response.toolCalls.map((tc) => ({
        tool: tc.function.name,
        params: JSON.parse(tc.function.arguments),
      }));
      return { content: response.content, toolCalls };
    }

    return { content: response.content };
  }

  async reason(
    task: string,
    context: string,
    tools: string[],
  ): Promise<AgentThought> {
    const reasoningPrompt = `
You are an expert software development agent. Analyze the task and create a detailed plan.

Task: ${task}

Context:
${context}

Available Tools: ${tools.join(", ")}

Respond with a JSON object containing:
{
  "thought": "What you're trying to achieve",
  "reasoning": "Why this approach makes sense",
  "plan": ["step 1", "step 2", "step 3"],
  "critique": "What could go wrong and how to handle it",
  "toolCalls": [{"tool": "tool_name", "params": {}}]
}
`;

    const messages: LLMMessage[] = [
      { role: "system", content: this.systemPrompt },
      { role: "user", content: reasoningPrompt },
    ];

    const response = await this.chat(messages);

    try {
      const parsed = JSON.parse(response.content);
      return {
        thought: parsed.thought || "",
        reasoning: parsed.reasoning || "",
        plan: parsed.plan || [],
        critique: parsed.critique || "",
        toolCalls: parsed.toolCalls || [],
      };
    } catch {
      return {
        thought: task,
        reasoning: "Could not parse LLM response",
        plan: ["Manual review required"],
        critique: "LLM parsing failed",
      };
    }
  }

  private getProviderUrl(provider: string): string {
    const urls: Record<string, string> = {
      openai: "https://api.openai.com/v1/chat/completions",
      openrouter: "https://openrouter.ai/api/v1/chat/completions",
      gemini:
        "https://generativelanguage.googleapis.com/v1beta/models/chat/completions",
    };
    return urls[provider] || urls.openai;
  }

  private parseResponse(provider: string, data: unknown): LLMResponse {
    if (provider === "gemini") {
      const d = data as Record<string, unknown>;
      const candidates = d.candidates as Array<{
        content?: { parts?: Array<{ text?: string }> };
      }>;
      const candidate = candidates?.[0];
      const content = candidate?.content;
      const parts = content?.parts;
      return {
        id: randomUUID(),
        content: parts?.[0]?.text || "",
        finishReason: "stop",
      };
    }

    const d = data as Record<string, unknown>;
    const choices = d.choices as Array<{
      message: { content: string };
      finish_reason?: string;
    }>;
    const choice = choices?.[0];
    const message = choice?.message;

    return {
      id: randomUUID(),
      content: message?.content || "",
      finishReason:
        (choice?.finish_reason as LLMResponse["finishReason"]) || "stop",
    };
  }

  private mockResponse(messages: LLMMessage[]): LLMResponse {
    const lastMessage = messages[messages.length - 1];
    return {
      id: randomUUID(),
      content: `I understand you want me to: ${lastMessage?.content.substring(0, 100)}... Let me analyze this and create a plan.`,
      finishReason: "stop",
    };
  }
}

export const llmIntegration = new LLMIntegration();

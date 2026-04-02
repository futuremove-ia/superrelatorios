import { readdir, readFile } from "fs/promises";
import { join } from "path";

export interface SPEC {
  id: string;
  title: string;
  version: string;
  date: string;
  content: string;
  sections: SPECSection[];
  requirements: SPECRequirement[];
}

export interface SPECSection {
  id: string;
  title: string;
  level: number;
  content: string;
}

export interface SPECRequirement {
  id: string;
  text: string;
  type: "must" | "should" | "could" | "would";
  status?: "implemented" | "pending" | "deprecated";
}

export class SPECLoader {
  private specsDir: string;
  private cache: Map<string, SPEC> = new Map();

  constructor(specsDir = "knowledge") {
    this.specsDir = specsDir;
  }

  async loadAllSPECs(): Promise<Map<string, SPEC>> {
    const files = await readdir(this.specsDir);
    const specFiles = files.filter(
      (f) => f.startsWith("SPEC_") && f.endsWith(".md"),
    );

    for (const file of specFiles) {
      const spec = await this.loadSPEC(file);
      if (spec) {
        this.cache.set(spec.id, spec);
      }
    }

    return this.cache;
  }

  async loadSPEC(filename: string): Promise<SPEC | null> {
    try {
      const content = await readFile(join(this.specsDir, filename), "utf-8");
      return this.parseSPEC(filename, content);
    } catch (error) {
      console.error(`Failed to load SPEC ${filename}:`, error);
      return null;
    }
  }

  private parseSPEC(filename: string, content: string): SPEC {
    const id = filename.replace(".md", "");
    const lines = content.split("\n");

    const title = this.extractTitle(lines) || id;
    const version = this.extractVersion(lines) || "1.0";
    const date =
      this.extractDate(lines) || new Date().toISOString().split("T")[0];

    const sections = this.extractSections(lines);
    const requirements = this.extractRequirements(lines);

    return {
      id,
      title,
      version,
      date,
      content,
      sections,
      requirements,
    };
  }

  private extractTitle(lines: string[]): string | null {
    const match = lines.find((l) => l.startsWith("# "));
    return match ? match.replace("# ", "").trim() : null;
  }

  private extractVersion(lines: string[]): string | null {
    const match = lines.find(
      (l) =>
        l.toLowerCase().includes("versão") ||
        l.toLowerCase().includes("version"),
    );
    if (!match) return null;
    const versionMatch = match.match(/(\d+\.\d+)/);
    return versionMatch ? versionMatch[1] : null;
  }

  private extractDate(lines: string[]): string | null {
    const match = lines.find(
      (l) =>
        l.toLowerCase().includes("data:") || l.toLowerCase().includes("date:"),
    );
    if (!match) return null;
    const dateMatch = match.match(/(\d{4}-\d{2}-\d{2})/);
    return dateMatch ? dateMatch[1] : null;
  }

  private extractSections(lines: string[]): SPECSection[] {
    const sections: SPECSection[] = [];
    let currentSection: SPECSection | null = null;

    for (const line of lines) {
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          id: this.slugify(headingMatch[2]),
          title: headingMatch[2].trim(),
          level: headingMatch[1].length,
          content: "",
        };
      } else if (currentSection) {
        currentSection.content += line + "\n";
      }
    }

    if (currentSection) {
      sections.push(currentSection);
    }

    return sections;
  }

  private extractRequirements(lines: string[]): SPECRequirement[] {
    const requirements: SPECRequirement[] = [];
    const requirementPatterns = [
      /(\d+)[).\s]+(?:THE\s+System\s+SHALL|MUST|SHOULD|COULD|WOULD)\s+(.+)/gi,
      /\[([\s\S]*?)\]\s*\((.+?)\)/g,
    ];

    let currentReqId = 0;
    for (const line of lines) {
      const mustMatch = line.match(/(\d+)[).\s]+THE\s+System\s+SHALL\s+(.+)/i);
      if (mustMatch) {
        currentReqId++;
        requirements.push({
          id: `REQ-${currentReqId}`,
          text: mustMatch[2].trim(),
          type: "must",
        });
      }
    }

    return requirements;
  }

  private slugify(text: string): string {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  getSPEC(id: string): SPEC | undefined {
    return this.cache.get(id);
  }

  getAllSPECs(): SPEC[] {
    return Array.from(this.cache.values());
  }

  searchSPECs(query: string): SPEC[] {
    const queryLower = query.toLowerCase();
    return this.getAllSPECs().filter(
      (spec) =>
        spec.title.toLowerCase().includes(queryLower) ||
        spec.content.toLowerCase().includes(queryLower) ||
        spec.sections.some((s) => s.title.toLowerCase().includes(queryLower)),
    );
  }

  getRequirement(specId: string, reqId: string): SPECRequirement | undefined {
    const spec = this.getSPEC(specId);
    return spec?.requirements.find((r) => r.id === reqId);
  }
}

export const specLoader = new SPECLoader();

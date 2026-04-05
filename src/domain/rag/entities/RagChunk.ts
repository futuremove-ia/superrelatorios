export class RagChunkEntity {
  constructor(
    public readonly id: string,
    public readonly documentId: string,
    public readonly organizationId: string,
    public readonly chunkText: string,
    public readonly chunkIndex: number,
    public readonly metadata: Record<string, unknown>,
    public embedding: number[] | null,
    public readonly createdAt: Date,
  ) {}

  static create(props: {
    documentId: string;
    organizationId: string;
    chunkText: string;
    chunkIndex: number;
    metadata?: Record<string, unknown>;
  }): RagChunkEntity {
    return new RagChunkEntity(
      crypto.randomUUID(),
      props.documentId,
      props.organizationId,
      props.chunkText,
      props.chunkIndex,
      props.metadata || {},
      null,
      new Date(),
    );
  }

  setEmbedding(embedding: number[]): void {
    this.embedding = embedding;
  }
}

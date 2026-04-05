export class RagDocumentEntity {
  constructor(
    public readonly id: string,
    public readonly organizationId: string,
    public readonly title: string,
    public readonly sourceType: string,
    public readonly sourceId: string | null,
    public readonly contentText: string,
    public isIndexed: boolean,
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}

  static create(props: {
    organizationId: string;
    title: string;
    sourceType: string;
    sourceId?: string;
    contentText: string;
  }): RagDocumentEntity {
    const now = new Date();
    return new RagDocumentEntity(
      crypto.randomUUID(),
      props.organizationId,
      props.title,
      props.sourceType,
      props.sourceId || null,
      props.contentText,
      false,
      now,
      now,
    );
  }

  markAsIndexed(): void {
    this.isIndexed = true;
    this.updatedAt = new Date();
  }
}

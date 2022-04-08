export class ApplicationError extends Error {
  public constructor(message: string) {
    super(message);
    this.name = "ApplicationError";
  }

  public toJSON(): Record<string, string> {
    return {
      message: this.message,
    };
  }
}

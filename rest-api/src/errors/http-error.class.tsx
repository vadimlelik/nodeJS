export class HttpError extends Error {
  statusCode: number;
  context?: string;

  constructor(stasusCode: number, message: string, context?: string) {
    super(message);
    this.statusCode = stasusCode;
    this.message = message;
    this.context = context;
  }
}

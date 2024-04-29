export class JsonParseError extends Error {
  readonly error : SyntaxError;
  constructor(error : SyntaxError) {
    super();
    this.error = error;
    this.name = 'JsonParseError';
    this.message = 'Failed to parse JSON data.';
  }
}

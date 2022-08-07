export default class ResourceNotFound extends Error {
  status: number;

  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.status = 404;
  }
}

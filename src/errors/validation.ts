import { EHTTP } from '../enums/http-status-code';

export default class ValidationError extends Error {
  status: number;

  constructor(message?: string) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.status = EHTTP.StatusBadRequest;
  }
}

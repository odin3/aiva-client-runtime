import { Log } from '../log';

export class Exception extends Error {
  constructor(message: string) {
    super(message);

    // Log error
    Log.error(this.className, message, this.stack);
  }

  public get className(): string {
    return this.constructor['name'];
  }
}
import { Exception } from './exception';

export class RuntimeHostException extends Exception {
  public constructor(message: string) {
    super(message);
  }
}
import { Exception } from './exception';

export class TypeException extends Exception {
  public constructor(message: string) {
    super(message);
  }
}
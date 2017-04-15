import { TypeException } from './type.exception';

export class ReadOnlyException extends TypeException {
  public constructor(valueName: string, target: any = null) {
    let msg = `Trying to access read-only ${target === null ? 'value' : 'property'} '${valueName}'`;

    if (target !== null) {
      msg += `at ${target.prototype.name}`;
    }

    super(msg);
  }
}

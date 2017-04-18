/**
 * Message GUID Class
 */
export class GUID {
  private readonly FORMAT: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  private _guid: string = null;

  public constructor() {
    this._guid = this.generateHash();
  }

  private generateHash(): string {
    return this.FORMAT.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
  }

  public toString(): string {
      return this._guid;
  }
}
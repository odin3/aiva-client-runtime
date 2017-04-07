import * as moment from 'moment';

import { LogLevel } from './log-level';
import { logLevels } from './log-levels';

export abstract class Logger {
  private _logLevel: number;
  private static readonly DATE_FORMAT: string = 'YYYY-MM-DD hh:mm:ss';

  public constructor(logLevel: number = LogLevel.ALL) {
    this._logLevel = logLevel;
  }

  public error(tag: string, message: string, ...content: any[]) {
    this.write(LogLevel.ERROR, tag, message, content);
  }

  public warn(tag: string, message: string, ...content: any[]) {
    this.write(LogLevel.WARN, tag, message, content);
  }

  public info(tag: string,message: string,  ...content: any[]) {
    this.write(LogLevel.INFO, tag, message, content);
  }

  public debug(tag: string, message: string, ...content: any[]) {
    this.write(LogLevel.DEBUG, tag, message, content);
  }

  private write(level: number, tag: string, message: string, content: any[] = []) {
    if ((this._logLevel === LogLevel.ALL) || (level <= this._logLevel)) {
      this.printMessage(level, tag, message, content);
    }
  }

  public static format(level: number, tag: string, message: string) {
    let date = moment().format(this.DATE_FORMAT);
    return `${date}: ${logLevels[level]}/${tag} ${message}`;
  }

  protected printMessage(level: number, tag: string, message: string, content: any[]) {

  }
}
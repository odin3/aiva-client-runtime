import { Logger } from '../logger';
import { LogLevel } from '../log-level';
import { logLevels } from '../log-levels';

/**
 * Log interface for browser dev-tools
 */
export class ConsoleLogger extends Logger {
  protected printMessage(level: number, tag: string, message, content: any[] = []) {
    let args = [Logger.format(level, tag, message), ...content];

    switch (level) {
      case LogLevel.ERROR:
        console.error.apply(console, args);
        break;
      case LogLevel.WARN:
        console.info.apply(console, args);
        break;
      case LogLevel.INFO:
        console.info.apply(console, args);
        break;
      default:
        console.log.apply(console, args);
        break;
    }
  }
}
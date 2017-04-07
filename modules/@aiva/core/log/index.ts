// Export items
export * from './loggers';
export * from './logger';
export * from './log-level';
export * from './log-levels';

// Export default logger
import { ConsoleLogger } from './loggers';
import { LogLevel } from './log-level';
export const Log: ConsoleLogger = new ConsoleLogger(LogLevel.DEBUG);
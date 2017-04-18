/**
 * Interface for JSON message for Aiva backend
 */
export interface IMessage<T> {
  GUID: string;
  Action: string;
  Destination: string;
  TimeStamp: number;
  Args: T
}
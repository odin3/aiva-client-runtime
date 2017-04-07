import { Observable, Observer } from 'rxjs';

import { GUID } from '../guid';
import { IMessage } from './imessage';
import { MessageBus } from './message-bus';
import { Response } from './response';

/**
 * Message class represents interface to share data between WebView and runtime
 */
export class Message<T> {
  private _guid: GUID = new GUID();
  private _disposed: boolean = false;

  /**
   * Create a new message
   * @param _action Action name
   * @param _destination Destination module
   * @param _args Arguments
   */
  public constructor(private _bus: MessageBus, private _action: string, private _destination: string, private _args: T) {}

  public onMessageResponse: Function;
  public get action(): string {
    return this._action;
  }

  public get destination(): string {
    return this._destination;
  }

  public get args(): T {
    return this._args;
  }

  public get id(): string {
    return this._guid.toString();
  }

  public toString(): string {
    let msg: IMessage<T> = {
      GUID: this.id,
      Action: this._action,
      Destination: this._destination,
      TimeStamp: Math.floor(Date.now() / 1000),
      Args: this._args
    };

    return JSON.stringify(msg);
  }

  public send(): Observable<Response> {
    if (this._disposed) {
      throw new ReferenceError('Disposed event can`t be sent');
    }

    return Observable.create((observer: Observer<Response>) => {
      this.onMessageResponse = (response: Response) => {
        if (response.success) {
          observer.next(response);
        } else {
          observer.error(response);
        }
      };

      this._bus.pushMessage(this);
    })

  }

  public dispose() {
    this._bus.removeMessage(this);
    this._disposed = true;
    this._guid = null;
    this._action = null;
    this._destination = null;
    this._args = null;
    this._bus = null;
  }
  
}
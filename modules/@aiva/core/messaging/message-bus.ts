import { Map } from 'es6-shim';
import { isUndefined } from 'lodash';

import { Message } from './message';
import { Log } from '../log';

export class MessageBus {
  private static readonly TAG: string = 'MessageBus';
  private _messages: Map<string, Message<any>> = new Map<string, Message<any>>();

  public pushMessage(message: Message<any>) {
    this._messages.set(message.id, message);

    let event = document.createEvent('MessageEvent');
    let origin = `${window.location.protocol}//${window.location.host}`;
    let json = message.toString();

    Log.debug(MessageBus.TAG, `Send message: ${message.action}@${message.destination}`);

    event.initMessageEvent(message.destination, true, true, json, origin, '1234', window);
    document.dispatchEvent(event);
  }

  public __pushResponse__(guid: string, success: boolean, response: any) {
    let message: Message<any> = this._messages.get(guid);
    alert(arguments);
    if (isUndefined(message)) {
      Log.error(MessageBus.TAG, `Receive response from ${message.action}@${message.destination} for unknown message ID (${guid})`);
    } else {
      Log.debug(MessageBus.TAG, `Response from: ${message.action}@${message.destination} (${success ? 'success' : 'failed'})`);
    }
  }

  public removeMessage(message) {
    this._messages.delete(message.id);
  }

  public createMessage(action: string, destination: string, args: any): Message<any> {
    return new Message<any>(this, action, destination, args);
  }
}
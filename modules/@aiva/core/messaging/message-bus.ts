import { Map } from 'es6-shim';
import { isUndefined } from 'lodash';

import { Message } from './message';
import { Response } from './response';
import { Log } from '../log';

export class MessageBus {
  private static readonly TAG: string = 'MessageBus';
  private _messages: Map<string, Message<any>> = new Map<string, Message<any>>();

  public pushMessage(message: Message<any>) {
    try {
      this._messages.set(message.id, message);

      let event: any = document.createEvent('MessageEvent');
      let origin = `${window.location.protocol}//${window.location.host}`;
      let json = message.toString();

      Log.debug(MessageBus.TAG, `Send message: ${message.action}@${message.destination}`);

      event.initMessageEvent(message.destination, true, true, json, origin, '1234', window, null);
      document.dispatchEvent(event);
    } catch (ex) {
      Log.error(MessageBus.TAG, `Failed to send message: ${ex.getMessage()}`);
    }
  }

  private __pushResponse__(guid: string, success: boolean, response: any) {
    let message: Message<any> = this._messages.get(guid);
    Log.debug(MessageBus.TAG, `Receive incoming message #${guid}: ${success ? 'success' : 'failed'})`);

    if (this._messages.has(guid)) {
      Log.debug(MessageBus.TAG, `Response from: ${message.action}@${message.destination} (${success ? 'success' : 'failed'})`);
      message.onMessageResponse(new Response(guid, success, response));
    } else {
      Log.error(MessageBus.TAG, `Receive response from ${message.action}@${message.destination} for unknown message ID (${guid})`);
    }
  }

  public removeMessage(message) {
    this._messages.delete(message.id);
  }

  public createMessage(action: string, destination: string, args: any): Message<any> {
    return new Message<any>(this, action, destination, args);
  }
}
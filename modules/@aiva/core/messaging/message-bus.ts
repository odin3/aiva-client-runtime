import { Map } from 'es6-shim';
import { Message } from './message';

export class MessageBus {
  private _messages: Map<string, Message<any>> = new Map<string, Message<any>>();

  public pushMessage(message: Message<any>) {
    let event = document.createEvent('MessageEvent');
    let origin = `${window.location.protocol}//${window.location.host}`;
    let json = message.toString();

    event.initMessageEvent(message.destination, true, true, json, origin, '1234', window);
    document.dispatchEvent(event);
  }
}
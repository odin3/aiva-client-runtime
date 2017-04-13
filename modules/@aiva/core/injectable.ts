import { MessageBus } from './messaging';

export class Injectable {
  public constructor(private _bus: MessageBus) {}
}
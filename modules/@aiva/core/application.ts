import { isNil } from 'lodash';
import { MessageBus } from './messaging';

export abstract class Application {
  
  protected _bus: MessageBus;

  public get bus(): MessageBus {
    return this._bus;
  }

  public constructor() {
    this._bus = new MessageBus();
  }

  public init() {
    this.onInit();
  }

  public dispose() {
    this.onDestroy();
  }

  protected onInit(): void {}
  protected onPause(): void {}
  protected onRestore(): void {}
  protected onDestroy(): void {}

  protected getClassName(): string {
    return this.constructor['name'];
  }
} 
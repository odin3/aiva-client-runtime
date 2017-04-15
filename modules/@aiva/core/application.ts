import { isNil } from 'lodash';
import { MessageBus } from './messaging';
import { WINDOW_APP_PROP } from './const';

export class Application {
  
  protected _bus: MessageBus = null;

  public get bus(): MessageBus {
    return this._bus;
  }

  public set bus(bus: MessageBus) {
    if (this._bus !== null) {
      throw new ReferenceError('MessageBus already assigned');
    }

    this._bus = bus;
  }

  public constructor() {}

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

  public static getDefaultApplication(): Application {
    return window[WINDOW_APP_PROP];
  }
} 
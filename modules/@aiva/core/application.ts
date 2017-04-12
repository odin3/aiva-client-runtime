import { isNil } from 'lodash';
import { MessageBus } from './messaging';

export abstract class Application {
  protected _bus: MessageBus = null;

  public init() {
    this.onInit();
  }

  public get bus(): MessageBus {
    if (isNil(this._bus)) {
      this._bus = new MessageBus();
    }

    return this._bus;
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
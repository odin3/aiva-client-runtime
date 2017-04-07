import { MessageBus } from './messaging';

export abstract class Application {
  protected _bus: MessageBus = new MessageBus();

  public constructor() {}

  public get bus(): MessageBus {
    return this._bus;
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
} 
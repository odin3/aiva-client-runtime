import { isNil } from 'lodash';

import { Application } from './application';
import { MessageBus } from './messaging';

export class Injectable {
  protected get bus(): MessageBus {
    if (isNil(this._bus)) {
      
      let app: Application = Application.getDefaultApplication();

      if (isNil(app)) {
        throw new ReferenceError('Aiva application instance is not available, check if application object was loaded by Bootstrap.');
      }

      this._bus = app.bus;
    }

    return this._bus;
  }

  protected set bus(newVal: MessageBus) {
    throw new TypeError('Cannot assign value to read-only property \'bus\'.');
  }

  public constructor(protected _bus: MessageBus = null) {}
}
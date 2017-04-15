import { isNil } from 'lodash';

import { WINDOW_APP_PROP } from './const';
import { Application } from './application';
import { MessageBus } from './messaging';

export class Injectable {
  protected get bus(): MessageBus {
    if (isNil(this._bus)) {
      
      if (isNil(window[WINDOW_APP_PROP])) {
        throw new ReferenceError('Aiva client application is not initialized by VM.');
      }

      let app: Application = window[WINDOW_APP_PROP];
      this._bus = app.bus;

    }

    return this._bus;
  }

  protected set bus(newVal: MessageBus) {
    throw new TypeError('Cannot assign value to read-only property \'bus\'.');
  }

  public constructor(protected _bus: MessageBus = null) {}
}
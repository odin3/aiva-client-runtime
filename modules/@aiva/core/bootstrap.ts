import { isArray, isObject, isBoolean } from 'lodash';

import { WINDOW_APP_PROP } from './const';
import { IBootArgs } from './boot-args';
import { Application } from './application';
import { MessageBus } from './messaging';

export function Bootstrap(args: IBootArgs = null) {
  let useDI: boolean = isObject(args) && isBoolean(args.useDependencyInjection) ? args.useDependencyInjection : false;

  return (target: any) => {

    let app: Application = null;
    
    // Create message bus
    let bus = new MessageBus();

    if (useDI) {
      // Get dependency list
      let metadata: any[] = Reflect.getMetadata('design:paramtypes', target);

      let dependencies = [];

      // Initialize all dependencies
      if (isArray(metadata)) {
        dependencies = metadata.map((i) => {
          return new i(bus);
        });
      }

      // Create app instance with resolved dependencies
      app = new (Function.prototype.bind.apply(target, dependencies));
    } else {
      app = new target();
    }

    app.bus = bus;

    window[WINDOW_APP_PROP] = app;

    return target;
  };
}
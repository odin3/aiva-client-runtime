import { isArray } from 'lodash';

import { Application } from './application';
import { MessageBus } from './messaging';

export function Bootstrap() {
  return (target: typeof Application) => {
    // Get dependency list
    let metadata: any[] = Reflect.getMetadata('design:paramtypes', target);

    // Create message bus
    let bus = new MessageBus();

    let dependencies = [];

    // Initialize all dependencies
    if (isArray(metadata)) {
      dependencies = metadata.map((i) => {
        return new i(bus);
      });
    }

    // Create app instance with resolved dependencies
    let app: Application = new (Function.prototype.bind.apply(target, dependencies));
    app.bus = bus;

    window['__app__'] = app;

    return target;
  };
}
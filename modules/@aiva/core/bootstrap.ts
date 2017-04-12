import { Application } from './application';
import { MessageBus } from './messaging';

export function Bootstrap() {
  return (target: any) => {
    window['__app__'] = new target();

    return target;
  };
}
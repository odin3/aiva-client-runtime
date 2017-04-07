import { Application } from './application';

export function Bootstrap() {
  return (target: any) => {
    window['__app__'] = new target();

    return target;
  };
}
import { isUndefined } from 'lodash';

export function OnClick(selector: string) {
  return (target: any, key: string, descriptor: any) => {

    if (isUndefined(descriptor)) {
      descriptor = Object.getOwnPropertyDescriptor(target, key);
    }

    document.addEventListener('DOMContentLoaded', () => {
      document.querySelector(selector).addEventListener('click', (event: MouseEvent) => {
        target[key].call(target, event);
      }, false);
    });

    return descriptor;
  };
}
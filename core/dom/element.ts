import { isNil } from 'lodash';

export function Element(selector: string) {
  return (target: any, key: string) => {
    let _val = target[key];
    let _selector = String(selector);
    
    let getter = function() {
      let element = document.querySelector(_selector);
      return isNil ? _val : element;
    };

    let setter = function(newVal) {
      _selector = newVal;
    };
  
    if (delete this[key]) {
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
      });
    }
  };
}
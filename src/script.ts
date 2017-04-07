//
// Aiva Client Runtime Host Library Demo
//
// 2017 © Denis Sedchenko, Licensed under MIT license
//

'use strict';

import { Application, Bootstrap, Message } from '../modules/@aiva/core';

@Bootstrap()
export class TestApp extends Application {
  protected onInit() {
    alert('init');
  }
}
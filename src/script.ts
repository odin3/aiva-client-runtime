//
// Aiva Client Runtime Host Library Demo
//
// 2017 © Denis Sedchenko, Licensed under MIT license
//

'use strict';

import { Application, Bootstrap, Message, Element, OnClick, Response, Log, LogLevel } from '../modules/@aiva/core';

@Bootstrap()
export class TestApp extends Application {
  
  @Element('#btn') btn: HTMLButtonElement;
  private readonly TAG: string = 'App';

  public constructor() {
    super();
    Log.setLevel(LogLevel.ALL);
  }

  protected onInit() {
    Log.debug(this.getClassName(), 'App initialized');
  }

  @OnClick('#btn')
  public onBtnClick() {
    Log.debug(this.getClassName(), 'Send test message');
    this.bus.createMessage('hello', 'Aiva.Modules.ClientRuntime', null)
            .send()
            .subscribe((r: Response)=> {
              console.log(r);
            }, (e: Response) => {
              console.error(e);
            });
  }
}
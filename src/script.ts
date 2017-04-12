//
// Aiva Client Runtime Host Library Demo
//
// 2017 © Denis Sedchenko, Licensed under MIT license
//

'use strict';

import { Application, Bootstrap, Message, Element, OnClick, Response, Log, LogLevel, MessageBus } from '../modules/@aiva/core';

@Bootstrap()
export class TestApp extends Application {
  
  @Element('#btn') btn: HTMLButtonElement;
  private readonly TAG: string = 'App';

  public constructor() {
    super();

    document.querySelector('#btn').addEventListener('click', () => {
      this.onBtnClick();
    });
  }

  protected onInit() {
    Log.setLevel(LogLevel.ALL);
    Log.debug(this.getClassName(), 'App initialized');
  }

  public onBtnClick() {
    Log.debug(this.getClassName(), 'Send test message');

    this.bus.createMessage('hello', 'Aiva.Modules.ClientRuntime', null)
          .send()
          .subscribe((r: Response)=> {
            Log.info(this.getClassName(), 'Received result', r);
          }, (e: Response) => {
            Log.error(this.getClassName(), 'Bad response: ', e);
            console.error(e);
          });
  }
}
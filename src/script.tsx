//
// Aiva Client Runtime Host Library Tech-Demo
//
// 2017 © Denis Sedchenko, Licensed under MIT license
//

'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { Application, Bootstrap, Response, Log, LogLevel } from '../modules/@aiva/core';
import { FileSystem } from '../modules/@aiva/storage';


import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppContainer } from './components';

@Bootstrap()
export class TestApp extends Application {
  public constructor() {
    super();
    injectTapEventPlugin();

    // Load ReactJS Application
    ReactDOM.render(
      <Router>
        <MuiThemeProvider>
          <div>
            <AppContainer app={this} />
          </div>
        </MuiThemeProvider>
      </Router>,
      document.getElementById("root")
    );
  }

  protected onInit() {
    Log.setLevel(LogLevel.ALL);
    Log.info(this.getClassName(), 'App initialized');

    

  }

  public tryFileSystem() {
    FileSystem
      .getDirectories('C:\\')
      .subscribe((dirs: string[]) => {
        dirs.forEach((dir: string) => Log.info('Dirs', dir))
      }, (error) => Log.error(this.getClassName(), error));
  }
}
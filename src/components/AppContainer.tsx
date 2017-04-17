import * as React from 'react';

import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import NavigationClose from 'material-ui/svg-icons/navigation/close';

import {
  Drawer,
  MenuItem,
  AppBar,
  IconButton,
  DropDownMenu,
  Divider,
  Paper
} from 'material-ui';

import { Application } from '../../modules/@aiva/core';

import { NetworkingPage } from './NetworkingPage';
import { StoragePage } from './StoragePage';
import { HomePage } from './HomePage';

export interface IAppContainerProps { app: Application }
export interface IAppContainerState { menuOpen: boolean }

export class AppContainer extends React.Component<IAppContainerProps, IAppContainerState> {
  constructor(props: IAppContainerProps) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  render() {
    return <div>
      <AppBar
        title="Aiva App Example"
        onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Drawer open={this.state.menuOpen}
        docked={false}
        onRequestChange={(menuOpen) => this.setState({ menuOpen })}>
        <AppBar
          title="Menu"
          onTitleTouchTap={() => this.handleToggle()}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        />
        <MenuItem>
          About Project
        </MenuItem>
        <MenuItem>
          Getting Started
        </MenuItem>
        <Divider />
        <MenuItem href="#/storage">
          Storage
        </MenuItem>
        <MenuItem href="#/network">
          Networking
        </MenuItem>
      </Drawer>

      <Paper zDepth={0} rounded={false} style={{margin: 40}}>
        <Route exact path="/" component={HomePage} />
        <Route path="/storage" component={StoragePage} />
        <Route path="/network" component={NetworkingPage} />
      </Paper>
    </div>;
  }

  handleToggle() {
    this.setState({ menuOpen: !this.state.menuOpen })
  };
}
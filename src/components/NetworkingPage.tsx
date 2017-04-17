import * as React from 'react';
import { styles } from '../styles';

export class NetworkingPage extends React.Component<undefined, undefined> {
  constructor() {
    super();
  }

  render() {
    return <div>
      <h1 style={styles.h1}>Networking</h1>
      <p>List of functions for network access and requests</p>
    </div>;
  }
}
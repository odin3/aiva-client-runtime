import * as React from 'react';
import { styles } from '../styles';

export class HomePage extends React.Component<undefined, undefined> {
  constructor() {
    super();
  }

  render() {
    return <div>
      <h1 style={styles.h1}>Home</h1>
      <p>List of functions for file system and storage access</p>
    </div>;
  }
}
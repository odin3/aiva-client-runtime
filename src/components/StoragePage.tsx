import * as React from 'react';

import { styles } from '../styles';
import { callbacks } from '../callbacks';
import { MethodsList, IMethod } from './MethodsList';
import { TryFeature } from './TryFeature';
import RaisedButton from 'material-ui/RaisedButton';

export class StoragePage extends React.Component<undefined, undefined> {
  constructor() {
    super();
  }

  render() {
    return <div>
      <h1 style={styles.h1}>
        FileSystem
        <small style={styles.heading.subtitle}>
          <code>@aiva/storage/file-system</code>
        </small>
      </h1>
      <p>Object that constains most of file system operations.</p>
      <TryFeature 
        title="Get Directories" 
        description="Get list of sub-directories from path"
        callback={callbacks.storageGetDirectories} />
    </div>;
  }
}
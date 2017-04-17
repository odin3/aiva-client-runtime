import * as React from 'react';

import { styles } from '../styles';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardTitle, CardHeader, CardActions, CardText } from 'material-ui/Card';

export interface ITryFeatureProps {
  title: string;
  description: string;
  callback: any;
}

export interface ITryFeatureState {
  result: string;
  source: string;
}

export class TryFeature extends React.Component<ITryFeatureProps, ITryFeatureState> {
  constructor(props: ITryFeatureProps) {
    super(props);

    this.state = {
      result: null,
      source: null
    };
  }

  runDemo() {
    this.props.callback().subscribe(
      () => this.displayResult,
      () => () => this.displayResult
    );
  }

  displayResult(...data) {
    console.warn(arguments);
    this.setState({ result: JSON.stringify(data) })
  }

  render() {
    let result = null;

    if (this.state.result !== null) {
      result = <CardText expandable={true}>
          <b>Result:</b>
          <p><code>{this.state.result}</code></p>
        </CardText>;
    }

    return <div style={styles.section}>
      <Card>
        <CardHeader title={this.props.title}
          actAsExpander={true}
          showExpandableButton={true}
          subtitle={this.props.description} />
        <CardActions>
          <FlatButton label="Try" onClick={() => this.runDemo()} />
        </CardActions>
        {result}
      </Card>
    </div>;
  }
}
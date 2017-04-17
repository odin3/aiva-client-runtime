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
      (data) => this.displayResult(data),
      (data) => () => this.displayResult(data)
    );
  }

  displayResult(data) {
    this.setState({ result: JSON.stringify(data) });
  }

  render() {
    let result = null;
    
    if (this.state.result !== null) {
      result = <CardText>
        <b>Result:</b>
        <p><code>{this.state.result}</code></p>
      </CardText>;
    }

    return <div style={styles.section}>
      <Card>
        <CardHeader title={this.props.title}
          subtitle={this.props.description} />
        {result}
        <CardActions>
          <FlatButton label="Run Example" onClick={() => this.runDemo()} />
        </CardActions>
      </Card>
    </div>;
  }
}
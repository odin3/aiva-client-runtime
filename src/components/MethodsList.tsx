import * as React from 'react';

export interface IMethod {
  outType: string;
  label: string;
  description: string;
}

export interface IMethodsListProps {
  methods: IMethod[];
  title: string;
}

export class MethodsList extends React.Component<IMethodsListProps, undefined> {
  constructor(props: IMethodsListProps) {
    super(props);
  }

  render() {
    return <table className="methods-info">
      <tbody>
        <tr>
          <th colSpan={2} className="methods-info__label">
            <h3>{this.props.title}</h3>
          </th>
        </tr>
        {this.props.methods.map((method: IMethod) => {
          return <tr>
            <td>
              <code>{method.outType}</code>
            </td>
            <td width="100%">
              <code>{method.label}</code>
              <p>{method.description}</p>
            </td>
          </tr>;
        })}
      </tbody>
    </table>;
  }
}
import { Component } from 'react';

class Content extends Component {
  render () {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default Content;

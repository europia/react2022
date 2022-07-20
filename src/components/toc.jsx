import { Component } from 'react';

class TOC extends Component {
  render () {
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while(i < data.length) {
      lists.push(<li><a href={"/content/" + data[i].id}>{data[i].title}</a></li>);
      i = i + 1;
    }
    return (
      <nav>
        <ul>
          <li>
            {lists}
          </li>
        </ul>
      </nav>
    )
  }
}

export default TOC;
import { Component } from 'react';
import './App.css';
import Content from './components/content';
import TOC from './components/toc';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{titie: 'web', sub: 'worsldkfjslkdfjlsafj'},
      contents: [
        {id:1, title:'HTML', desc:'html is folkdjflasdjflaf'},
        {id:2, title:'css', desc:'html is folkdjflsafsfasfasdjflaf'},
        {id:3, title:'HTMLq', desc:'html is folkdjflasscaffdjflaf'}
      ]
    }
  }

  render () {
    return (
      <div className="App">
        안뇽 사랑해
        <Content title="아침 인사" text="졸려졸려" />
        <TOC data={this.state.contents} />
      </div>
    )
  }
}

export default App;

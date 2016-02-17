import React, { Component } from 'react';

import RackInput from './containers/RackInput';
import WordList from './containers/WordList';
import Cards from './components/Stack';

import Jumbo from './components/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { header: true };
  }
  render() {
    return (
      <div>
        <Jumbo visible={this.state.header} />
        <RackInput
          onFocus={() => this.setState({ header: false })}
          onBlur={() => this.setState({ header: true })}
        />
        <WordList />
      </div>
    );
  }
}

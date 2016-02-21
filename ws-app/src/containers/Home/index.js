import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';

import Jumbo from '../../components/Header';
import Page from '../../components/Page';
import RackInput from '../RackInput';
import WordList from '../WordList';

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbo visible={this.props.isActive} />
        <Page>
          <RackInput />
          <WordList />
        </Page>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isActive: state.solver.isEmpty
});

export default connect(mapStateToProps)(Home);

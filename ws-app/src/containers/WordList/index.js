import React, { Component } from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';

import WordGroup from '../../components/WordGroup';
import Page from '../../components/Page';
import classes from './styles.scss';

class WordGroups extends Component {
  render() {
    const { results } = this.props;

    if (!results) {
      return <p>fill yo rack, son</p>
    }

    return (
      <div>
        {results.map(group => {
          return <WordGroup
            count={group.count}
            key={group.count}
            num={group.num}
            words={group.words}
          />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.solver.results
  }
}

export default connect(mapStateToProps)(WordGroups);

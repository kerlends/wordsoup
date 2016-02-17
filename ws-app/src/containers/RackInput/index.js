import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import Input from 'react-toolbox/lib/input';

import classes from './styles.scss';

import {
  solverRequest,
  clearRack
} from '../../actions';

class RackInput extends Component {
  constructor(props) {
    super(props);
    this.state = { rack: '' };
  }

  onInputChange = (rack) => {
    this.setState({ rack });

    if (rack.length > 0) {
      this.props.solverRequest(rack);
    } else {
      this.props.clearRack();
    }
  };

  render() {
    return (
      <div className={cx('container-fluid', classes.container)}>
        <input
          type='text'
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          className={cx('form-control', classes.input)}
          value={this.state.rack}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
};

export default connect(mapStateToProps, { solverRequest, clearRack })(RackInput);

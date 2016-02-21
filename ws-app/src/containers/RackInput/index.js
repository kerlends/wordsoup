import React, { Component } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import _ from 'lodash';

import { solver, clearRack } from '../../actions';
import classes from './styles.scss';

class RackInput extends Component {
  onInputChange = (rack) => {
    const { solver, clearRack } = this.props;
    rack.length > 0 ? solver(rack) : clearRack();
  };

  render() {
    const solve = _.debounce(rack => {
      this.onInputChange(rack)
    }, 300);

    return (
      <input
        type='text'
        className={cx('form-control', classes.input)}
        onChange={event => solve(event.target.value)}
        onKeyDown={event => console.log(event.target.value)}
      />
    )
  }
}

export default connect(null, { solver, clearRack })(RackInput);

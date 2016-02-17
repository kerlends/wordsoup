import React from 'react';
import cx from 'classnames';
import AppBar from 'react-toolbox/lib/app_bar';
import classes from './styles.scss';

const Jumbo = (props) => {
  return props.visible ?
    (<div className={cx('jumbotron', classes.jumbo)}>
      <div className='container'>
        <h1 className={classes.header}>
          word<small>soup</small>
        </h1>
      </div>
    </div>) : <div />;
}

export default Jumbo;

import React, {PropTypes} from 'react'
import cx from 'classnames'
import classes from './Jumbo.scss'

const Jumbotron = (props) => {
  return (
    <div key={props.key} className={cx('jumbotron', classes.jumbo)}>
      <div className='container'>
        <h1 className={classes.header}><a>word<small>soup</small></a></h1>
      </div>
    </div>
  )
}

Jumbotron.propTypes = {
  key: PropTypes.string.isRequired
}

export default Jumbotron

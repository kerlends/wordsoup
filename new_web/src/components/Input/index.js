import React, {PropTypes, Component} from 'react'
import cx from 'classnames'
import classes from './Input.scss'

class RackInput extends Component {
  static propTypes = {
    onRackChange: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props)
    this.state = { rack: '' }
  }

  inputHandler = rack => {
    this.setState({ rack })
    this.props.onRackChange(rack)
  };

  render () {
    return (
      <div className={cx('col-xs-12', 'col-sm-10', 'col-md-6', 'col-md-offset-3', 'col-sm-offset-1')}>
        <input
          type='text'
          className={cx('form-control', classes.input)}
          value={this.state.rack}
          onChange={event => this.inputHandler(event.target.value)} />
      </div>
    )
  }
}

export default RackInput

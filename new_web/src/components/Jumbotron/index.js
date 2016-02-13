import React, {PropTypes, Component} from 'react'

import Jumbotron from './Jumbo'
import './transitions.scss'

class JumboContainer extends Component {
  static propTypes = {
    isHidden: PropTypes.bool
  };

  render () {
    return this.props.isHidden
      ? <div /> : <Jumbotron />
  }
}

JumboContainer.defaultProps = {
  isHidden: false
}

export default JumboContainer

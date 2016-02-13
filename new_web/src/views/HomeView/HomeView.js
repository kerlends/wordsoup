import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions as counterActions } from '../../redux/modules/counter'

import Jumbotron from 'components/Jumbotron'
import RackInput from 'components/Input'

// We define mapStateToProps where we'd normally use
// the @connect decorator so the data requirements are clear upfront, but then
// export the decorated component after the main class definition so
// the component can be tested w/ and w/o being connected.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
const mapStateToProps = (state) => ({
  counter: state.counter
})
export class HomeView extends React.Component {
  static propTypes = {
    counter: PropTypes.number
  };

  constructor (props) {
    super(props)
    this.state = { hideHero: false }
  };

  onRackInputChange = (rack) => {
    this.setState({ hideHero: (rack.length > 0)})
  };

  render () {
    return (
      <div>
        <Jumbotron isHidden={this.state.hideHero} />
        <RackInput onRackChange={this.onRackInputChange} />
      </div>
    )
  }
}

export default connect(mapStateToProps, counterActions)(HomeView)

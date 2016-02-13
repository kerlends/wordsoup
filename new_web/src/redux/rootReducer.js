import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import solver from './modules/solver'

export default combineReducers({
  solver,
  router
})

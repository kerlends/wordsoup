import { solverRequest } from '../actions';
import {
  SOLVER_REQUEST,
  SOLVER_SUCCESS,
  SOLVER_FAILURE,
  RACK_CLEAR
} from '../constants';

const initialState = {
  results: [],
  errors: null,
  isSolving: false,
  isEmpty: true
}

export default (state = initialState, action) => {
  switch (action.type) {
      case SOLVER_REQUEST:
          return {
            ...state,
            isSolving: true
          };
      case SOLVER_SUCCESS:
          return {
            ...state,
            results: action.results.data,
            isSolving: false,
            isEmpty: !(action.results.data.length > 0),
            errors: null
          }
      case SOLVER_FAILURE:
          return {
            ...state,
            errors: action.errors,
            isSolving: false
          }
      case RACK_CLEAR:
          return {
            results: [],
            errors: null,
            isSolving: false,
            isEmpty: true
          };
      default:
          return state;
  }
};

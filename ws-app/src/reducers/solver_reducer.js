import { solverRequest } from '../actions';
import {
  SOLVER_REQUEST,
  RACK_CLEAR
} from '../constants';

const initialState = {
  results: []
}

export default (state = initialState, action) => {
  switch (action.type) {
      case SOLVER_REQUEST:
          return {
            results: action.payload.data
          };
      case RACK_CLEAR:
          return {
            results: []
          };
      default:
          return state;
  }
};

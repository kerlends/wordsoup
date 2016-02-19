import axios from 'axios';
import {
  SOLVER_REQUEST,
  SOLVER_SUCCESS,
  SOLVER_FAILURE,
  RACK_CLEAR
} from '../constants';

const API_URL = 'http://localhost:8000/api/solve/';

export const solverRequest = () => ({
  type: SOLVER_REQUEST
});

export const solverSuccess = (results) => ({
  type: SOLVER_SUCCESS,
  results
});

export const solverFailure = (errors) => ({
  type: SOLVER_FAILURE,
  errors
});

export const solver = (rack) => {
  return dispatch => {
    debugger;
    dispatch(solverRequest());
    return axios.post(API_URL, { rack, limit: 24 })
      .then(response => dispatch(solverSuccess(response)))
      .catch(errors => dispatch(solverFailure(errors)));
  }
}

export const clearRack = () => ({
  type: RACK_CLEAR
});

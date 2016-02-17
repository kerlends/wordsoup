import axios from 'axios';
import {
  SOLVER_REQUEST,
  RACK_CLEAR
} from '../constants';

const API_URL = 'http://localhost:8000/api/solve/';

export const solverRequest = (rack) => {
  const request = axios.post(API_URL, { rack, limit: 24 });

  return {
    type: SOLVER_REQUEST,
    payload: request
  }
}

export const clearRack = () => {
  return {
    type: RACK_CLEAR
  }
}

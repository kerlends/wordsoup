import fetch from 'whatwg-fetch'

const API_URL = 'https://wordsoup.me/api/solve/'

export const SOLVE = 'SOLVE'
export const RACK_SOLVED = 'RACK_SOLVED'
export const RACK_NOT_SOLVED = 'RACK_NOT_SOLVED'

export const solveRack = (rack): Action => {
  return (dispatch) => {
    dispatch({ type: SOLVE })

    return fetch(API_URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(rack)
    }).then(
      (result) => dispatch({ type: RACK_SOLVED, result }),
      (error) => dispatch({ type: RACK_NOT_SOLVED, error })
    )
  }
}

export const actions = {
  solveRack
}

const ACTION_HANDLERS = {
  [SOLVE]: (state, {payload}) => state + payload
}

const initialState = {
  rack: ''
}

export default function solverReducer(state = initialState, action: Action): Object {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}

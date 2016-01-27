export default function post (state, storeHandler) {
  if (state.rack.length > 0) {
    fetch(apiUrl, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(state)
    }).then(checkStatus).then(jsonUnwrap).then(storeHandler)
  }
}


const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
}

const jsonUnwrap = (response) => {
  return response.json();
}

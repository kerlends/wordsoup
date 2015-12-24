import React from 'react';
const {PropTypes} = React;

export default class APIFetch extends React.Component {
  /*
  constructor() {
    super();
    this.state = {
      data: {
        rack: "anagrams",
        limit: 24
      },
      results: {}
    };

    this.postApi = this.postApi.bind(this);
    this.handleData = this.handleData.bind(this);
  }
  */

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  jsonUnwrap(response) {
    return response.json();
  }

  handleData(data) {
    let {onUnwrap} = this.props;
    this.setState({results: data}, () => {
      onUnwrap(data);
    });
  }

  postApi(event) {
    event.preventDefault();
    let data = this.props.payload;
    if (data.rack.length > 0) {
      fetch('/api/solve/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(this.checkStatus)
      .then(this.jsonUnwrap)
      .then(this.handleData)
    }
    else alert("Can't submit an empty rack!");
  }

  render() {
    let buttonText = this.props.button;
    return (
      <span className="input-group-btn">
        <button className="btn btn-default" onClick={this.postApi} type="submit">{buttonText}</button>
      </span>
    );
  }
}

APIFetch.propTypes = {
  payload: PropTypes.any.isRequired,
  onUnwrap: PropTypes.func.isRequired,
  button: PropTypes.any.isRequired
}

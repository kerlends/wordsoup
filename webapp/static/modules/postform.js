import React from 'react';
import Menu from './components/menu';
const {PropTypes} = React;

export default class PostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rack: '',
      limit: 24
    }

    this.storeResults = this.storeResults.bind(this);
    this.handleRackChange = this.handleRackChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
  }

  inputTimer;

  handleRackChange(event) {
    this.setState({rack: event.target.value.toLowerCase().replace(/[^a-zA-Z]/g, '')});

    if (!this.state.rack.length > 0) this.props.panic();

    if (this.inputTimer) {
      clearTimeout(this.inputTimer);
    }

    this.inputTimer = setTimeout(() => {
      this.postApi();
    }, 250);

  }

  handleLimitChange(event) {
    this.setState({limit: event.target.value});
  }

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

  postApi() {
    if (this.state.rack.length > 0) {
      fetch('/api/solve/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(this.checkStatus)
      .then(this.jsonUnwrap)
      .then(this.storeResults)
    }
  }

  storeResults(data) {
    let {handleResults} = this.props;
    this.setState({results: data.solved}, () => {
      handleResults(data.solved);
    });
  }

  render() {
    let limitInput = <input className="form-control" type="number" value={this.state.limit} onChange={this.handleLimitChange} />
    let buttonText = this.props.buttonText;

    return (
      <div>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <form className="form">
            <div className="input-group">
              <input className="form-control" type="text" value={this.state.rack} onChange={this.handleRackChange} />
              <span className="input-group-btn">
                <button className="btn btn-default" onClick={this.postApi} type="submit">{buttonText}</button>
              </span>
            </div>
            <div className="input-group">
            </div>
          </form>
        </div>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <h5>
            <small>
              <strong>{this.state.rack}</strong>
            </small>
          </h5>
        </div>
        <Menu limit={limitInput} />
      </div>
    );
  }
}

PostForm.propTypes = {
  handleResults: PropTypes.func.isRequired,
  buttonText: PropTypes.any.isRequired
}

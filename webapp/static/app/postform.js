import React from 'react';
import Menu from './components/menu';
import post from './api';
const {PropTypes} = React;

export default class PostForm extends React.Component {
  constructor() {
    super();
    this.state = {
      rack: '',
      limit: 24
    }

    this.apiUrl = '/api/solve/';
    this.storeResults = this.storeResults.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.handleRackChange = this.handleRackChange.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.inputTimer;
  }

  clearAll(event) {
    event.preventDefault();
    this.setState({rack: ''});
    this.props.panic();
  }

  handleRackChange(event) {
    this.setState({rack: event.target.value.toLowerCase().replace(/[^a-zA-Z]/g, '')});

    if (!this.state.rack.length > 0) this.props.panic();

    if (this.inputTimer) {
      clearTimeout(this.inputTimer);
    }

    this.inputTimer = setTimeout(() => {
      post(this.state, this.apiUrl, this.storeResults);
    }, 320);
  }

  handleLimitChange(event) {
    this.setState({limit: event.target.value});
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
              <input className="form-control" type="text" value={this.state.rack} onChange={this.handleRackChange} autofocus autoComplete="off" />
              <span className="input-group-btn">
                <button className="btn btn-default" onClick={this.clearAll} type="submit">{buttonText}</button>
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

import React from 'react';
import APIFetch from './fetch';
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

    handleRackChange(event) {
        this.setState({rack: event.target.value});
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
        let formData = {rack: this.state.rack, limit: this.state.limit};
        return (
            <form className="form">
                <div className="form-group">
                    <input className="form-control" type="text" value={this.state.rack} onChange={this.handleRackChange} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="number" value={this.state.limit} onChange={this.handleLimitChange} />
                </div>
                <APIFetch payload={formData} onUnwrap={this.storeResults} />
            </form>
        );
    }
}

PostForm.propTypes = {
    handleResults: PropTypes.func.isRequired,
}

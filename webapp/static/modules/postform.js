import React from 'react';
import APIFetch from './fetch';
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

    handleRackChange(event) {
        this.setState({rack: event.target.value.toLowerCase().replace(/[^a-zA-Z]/g, '')});
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
        let limitInput = <input className="form-control" type="number" value={this.state.limit} onChange={this.handleLimitChange} />
        let buttonText = this.props.buttonText;

        return (
            <div>
                <div className="col-xs-12 col-md-6 col-md-offset-3">
                    <form className="form">
                        <div className="input-group">
                            <input className="form-control" type="text" value={this.state.rack} onChange={this.handleRackChange} />
                            <APIFetch payload={formData} onUnwrap={this.storeResults} button={buttonText} />
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

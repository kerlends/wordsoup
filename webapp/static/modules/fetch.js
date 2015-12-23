import React from 'react';
const {PropTypes} = React;

export default class APIFetch extends React.Component {
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

    render() {
        return (
            <div className="well">
                <button className="btn btn-primary" onClick={this.postApi} type="submit">Post</button>
            </div>
        );
    }
}

APIFetch.propTypes = {
    payload: PropTypes.any.isRequired,
    onUnwrap: PropTypes.func.isRequired
}

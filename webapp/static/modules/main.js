import React from 'react';
import PostForm from './postform';
import GroupList from './results/grouplist';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            groups: [],
            count: 0
        }

        this.storeResults = this.storeResults.bind(this);
    }

    storeResults(data) {
        this.setState({groups: data.data, count: this.state.count+1});
    }

    render() {
        return (
            <div className="App well">
                <PostForm handleResults={this.storeResults} />
                <GroupList groups={this.state.groups} />
            </div>
        );
    }
}

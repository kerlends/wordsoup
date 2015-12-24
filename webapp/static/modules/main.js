import React from 'react';
import PostForm from './postform';
import GroupList from './components/grouplist';
import WordSoupHeader from './components/jumbotron';
import Menu from './components/menu';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            groups: [],
            count: 0
        }

        this.storeResults = this.storeResults.bind(this);
        this.isNotEmpty = this.isNotEmpty.bind(this);
    }

    storeResults(data) {
        this.setState({groups: data.data, count: this.state.count+1});
    }

    isNotEmpty() {
        return (this.state.groups.length > 0);
    }

    showResults() {
        if (this.isNotEmpty()) {
            return <GroupList groups={this.state.groups} />;
        } else {
            return (
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <center><p>Nothing to show!</p></center>
                </div>
            )
        }
    }

    render() {
        let wsInfo = {show: this.isNotEmpty(), text: "word soup"};
        let buttonText = 'Solve!';
        return (
            <div>
                <WordSoupHeader info={wsInfo} />
                <div className="container-fluid">
                    <div className="row">
                        <PostForm handleResults={this.storeResults} buttonText={buttonText} />
                        {this.showResults()}
                    </div>
                </div>
            </div>
        );
    }
}

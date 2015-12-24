import React from 'react';
import Word from './word';
const {PropTypes} = React;

export default class WordList extends React.Component {
    generateList(words) {
        let allWords = [];
        words.map((word) => {
            allWords.push(<Word item={word} key={word[0]} />);
        })

        return allWords;
    }

    render() {
        let words = this.props.words.map((word) => {
            return <Word item={word} key={word[0]} />
        });
        return (
            <div className="panel-body">
                {words}
            </div>
        );
    }
}

WordList.propTypes = {
    item: PropTypes.array.isRequired
}

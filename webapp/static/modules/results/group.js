import React from 'react';
import WordList from './wordlist';
const {PropTypes} = React;

export default class WordGroup extends React.Component {
    render() {
        let {num, count, words} = this.props.item;
        return (
            <div className="well" key={count}>
                <h4>{count} letter words ({num} total)</h4>
                <WordList item={words} />
            </div>
        );
    }
}

WordGroup.propTypes = {
    item: PropTypes.any.isRequired
}

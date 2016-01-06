import React from 'react';
import Word from './word';
const {PropTypes} = React;

export default class WordList extends React.Component {
  render() {
    return (
      <div className="panel-body">
        {this.props.words.map((word) => {
          return <Word item={word} key={word[0]} />
        })}
      </div>
    );
  }
}

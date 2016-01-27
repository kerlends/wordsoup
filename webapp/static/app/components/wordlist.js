import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Word from './word';
import './style.scss';
const {PropTypes} = React;

export default class WordList extends React.Component {
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

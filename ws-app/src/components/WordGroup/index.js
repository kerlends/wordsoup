import React, { PropTypes, Component } from 'react';

import css from './styles.scss';

const Word = props => {
  const { word } = props;
  return (
    <small className={css.word}>
      {word[0]}
      <sup>{word[1]}</sup>
    </small>
  )
}

const WordList = props => {
  const { words } = props;
  return (
    <div className={css.wordlist}>
      {words.map(word => {
        return <Word word={word} key={word} />;
      })}
    </div>
  )
}

const WordGroup = props => {
  let { count, num, words } = props;
  const title = `${count} letters`;
  const subtitle = `${num} total`;

  return (
    <div key={count}>
      <div className={css.header}>
        <div>{title}</div> <small>({subtitle})</small>
      </div>
      <WordList words={words} />
    </div>
  )
}

export default WordGroup;

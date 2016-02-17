import React, { PropTypes } from 'react';

const Word = (props) => {
  const { word } = props;
  return (
    <small key={word[0]}>
      {word[0]}
      <sup>{word[1]}</sup>
    </small>
  )
};

const WordList = (props) => {
  let { words } = props;
  return (
    <div className='wordlist' key={props.key}>
      {words.map(word => {
        return <Word word={word} />;
      })}
    </div>
  )
};

const WordGroup = (props) => {
  let { count, num, words } = props;
  const title = `${count} letter words`;
  const subtitle = `${num} total`;

  return (
    <div className='row' key={count}>
      <div className='col-xs-12'>
        {title} <small>({subtitle})</small>
      </div>
      <WordList words={words} key={count} />
    </div>
  )
}

export default WordGroup;

import React from 'react';
import WordList from './wordlist';

export default class WordGroup extends React.Component {
  render() {
    let {num, count, words} = this.props.group;
    return (
      <div className="panel panel-default" key={count}>
        <div className="panel-heading">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6">
              <p className="text-left">
                {count} characters
              </p>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6">
              <small>
                <p className="text-right">
                  {num} total
                </p>
              </small>
            </div>
          </div>
        </div>
        <WordList words={words} />
      </div>
    );
  }
}

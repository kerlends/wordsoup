import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import WordGroup from './group';
import './style.scss';

export default class GroupList extends React.Component {
  render() {
    let groups = this.props.groups.map((group) => {
      return <WordGroup group={group} key={group.count} />
    });

    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
          {groups}
      </div>
    );
    }
}

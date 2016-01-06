import React from 'react';
import WordGroup from './group';

export default class GroupList extends React.Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
              {this.props.groups.map((group) => {
                return <WordGroup group={group} key={group.count} />;
              })}
            </div>
        );
    }
}

import React from 'react';
import WordGroup from './group';
const {PropTypes} = React;

export default class GroupList extends React.Component {
    buildGroups(groups) {
        let groupList = [];
        groups.map((group) => {
            groupList.push(<WordGroup item={group} key={group.count} />)
        })
        return groupList;
    }

    render() {
        return (
            <div className="well">
                {this.buildGroups(this.props.groups)}
            </div>
        );
    }
}

GroupList.propTypes = {
    groups: PropTypes.array.isRequired
}

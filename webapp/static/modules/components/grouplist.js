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
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-offset-3">
                {this.buildGroups(this.props.groups)}
            </div>
        );
    }
}

GroupList.propTypes = {
    groups: PropTypes.array.isRequired
}

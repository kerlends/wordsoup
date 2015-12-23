import React from 'react';
const {PropTypes} = React;

export default class Word extends React.Component {
    render() {
        let arr = this.props.item;
        return (
            <li className="list-group-item">
                <strong>{arr[0]}<sup>{arr[1]}</sup></strong>
            </li>
        );
    }
}

Word.propTypes = {
    item: PropTypes.array.isRequired
}

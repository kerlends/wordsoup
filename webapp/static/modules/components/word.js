import React from 'react';
const {PropTypes} = React;

export default class Word extends React.Component {
    render() {
        let arr = this.props.item;
        return (
            <div className="col-xs-4 col-sm-4 col-md-2">
                <a>{arr[0]}<sup>{arr[1]}</sup></a>
            </div>
        );
    }
}

Word.propTypes = {
    item: PropTypes.array.isRequired
}

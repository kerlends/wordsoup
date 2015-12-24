import React from 'react';
const {PropTypes} = React;

export default class WordSoupHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true,
            text: 'word soup'
        }

        this.preprop = this.preprop.bind(this);
    }

    componentDidMount() {
        let {info} = this.props;
        this.setState({show: info.show, text: info.text});
    }

    preprop() {
        let text = this.state.text.split(' ');
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1><a>{text[0]}<small>{text[1]}</small></a></h1>
                </div>
            </div>
        );
    }

    render() {
        let show = this.props.info.show;
        if (!show) return this.preprop();
        else return <div />;
    }
}

WordSoupHeader.propTypes = {
    info: PropTypes.object.isRequired,
}

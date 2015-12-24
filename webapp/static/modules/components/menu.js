import React from 'react';
const {PropTypes} = React;

export default class Menu extends React.Component {
    render() {
        let limitInput = this.props.limit;
        return (
            <div>
                <div className="modal fade" id="options">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button className="close" data-dismiss="modal" aria-label="Close" type="submit">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <h4 className="modal-title">Options</h4>
                            </div>
                            <div className="modal-body">
                                <form className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Word count limit</label>
                                        <div className="col-sm-10">
                                            {limitInput}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-sm-2 control-label">Scrabble mode</label>
                                        <div className="col-sm-10">
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opt-nav">
                    <button className="btn btn-default" data-toggle="modal" data-target="#options">
                        <span className="glyphicon glyphicon-tasks"></span>
                    </button>
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    limit: PropTypes.any.isRequired
}

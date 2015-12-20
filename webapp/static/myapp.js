"use strict";

var getData = function getData() {
    var myData = { rack: 'anagrams', limit: 24 };
    var url = "/api/solve/";
    $.ajax({
        type: "POST",
        url: url,
        data: myData,
        success: function success(data) {
            console.log(data);
        },
        error: function error(e) {
            console.log(e);
        },
        dataType: 'application/json'
    });
};

var ResultData = React.createClass({
    displayName: "ResultData",
    render: function render() {
        return React.createElement(
            "h1",
            null,
            "test",
            React.createElement(
                "small",
                null,
                "test"
            )
        );
    }
});

React.render(React.createElement(ResultData, null), document.getElementById('content'));

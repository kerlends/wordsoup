"use strict";

var Results = React.createClass({
    displayName: "Results",

    render: function render() {
        var myData = { "rack": "anagrams", "limit": 24 };
        var url = "/api/solve/";
        fetch(url, {
            mode: 'no-cors',
            method: 'post',
            body: myData
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return console.log(data);
        }).catch(function (err) {
            return console.error(url, err.toString());
        });
        return React.createElement(
            "h1",
            null,
            "Testing",
            React.createElement(
                "small",
                null,
                "testing"
            )
        );
    }
});

React.render(React.createElement(Results, null), document.getElementById('content'));

var getData = function() {
    let myData = {rack: 'anagrams', limit: 24};
    let url = "/api/solve/";
    $.ajax({
        type: "POST",
        url: url,
        data: myData,
        success: function(data) {
            console.log(data);
        },
        error: function(e) {
            console.log(e);
        },
        dataType: 'application/json'
    });
};

var ResultData = React.createClass({
    render() {
        return <h1>test<small>test</small></h1>
    }
});

React.render(
    <ResultData/>,
    document.getElementById('content')
);

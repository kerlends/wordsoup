var Results = React.createClass({
    render: function() {
        let myData = {"rack": "anagrams", "limit": 24};
        let url = "/api/solve/";
        fetch(url, {
            mode: 'no-cors',
            method: 'post',
            body: myData
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(url, err.toString()));
        return (
            <h1>
                Testing<small>testing</small>
            </h1>
        );
    }
});

React.render(
    <Results/>,
    document.getElementById('content')
);

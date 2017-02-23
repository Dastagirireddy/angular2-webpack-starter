var express = require('express');

var app = new express();

app.use(express.static(__dirname));

app.get('/api/users', function(req, res) {

    res.json([{
        name: "dasta",
        id: 1
    }, {
        name: "dinesh",
        id: 2
    }, {
        name: "harsha",
        id: 3
    }]);
});

app.listen(3000, function() {

    console.log("Listening at 3000");
});

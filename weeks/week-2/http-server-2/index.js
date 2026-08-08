const express = require("express");

const app = express();

const port = 3000;

app.get("/route-handler", function(req, res) {

    // headers, body, query parameters
    // do machine learning model

    res.json({
        name: "Sohan Dsouza",
        age: 22
    });

});

app.get("/assignments", function(req, res) {
    
    res.send("<b>Assignments</b> <br> <ul> <li>Assignment 1</li> <li>Assignment 2</li> </ul> ");    
});


app.get("/", function(req, res) {

    res.send("<b>Welcome to my server</b>");

});

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});
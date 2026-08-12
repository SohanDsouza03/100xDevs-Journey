// The req (request) object contains information about the HTTP request
// sent by the client to the Express server.

// What is req.method?
// req.method contains the HTTP method used by the client.







// const express = require("express");

// const app = express();

// const port = 3000;

// // req.method tells us which HTTP method was used
// app.get("/todos", function(req, res) {

//     console.log(req.method);

//     res.send("Request received");

// });

// // Start the server
// app.listen(port, function() {
//     console.log(`Server running at http://localhost:${port}`);
// });






// 🟢 2. req.url
// Definition

// req.url is a property of the Express request object that contains the URL path requested by the client.





// const express = require("express");

// const app = express();

// const port = 3000;

// // req.url tells us which URL was requested
// app.get("/todos", function(req, res) {

//     console.log(req.url);

//     res.send("Request received");

// });

// // Start the server
// app.listen(port, function() {
//     console.log(`Server running at http://localhost:${port}`);
// });




// //Now try another URL

// app.get("/assignments", function(req, res) {

//     console.log(req.url);

//     res.send("Assignments");

// });












// 🟢 3. req.params

// req.params contains the values of dynamic parameters defined in an Express route using :parameterName.



// const express = require("express");

// const app = express();

// const port = 3000;

// // req.params gets dynamic values from the URL
// app.get("/todos/:id", function(req, res) {

//     console.log(req.params.id);

//     res.send("Todo requested");

// });

// app.listen(port, function() {
//     console.log(`Server running at http://localhost:${port}`);
// });







// 🟢 4. req.query

// req.query is an Express request property that contains the query parameters provided in the URL after ?.





// const express = require("express");

// const app = express();

// const port = 3000;

// // req.query gets values after ? in the URL
// app.get("/todos", function(req, res) {

//     console.log(req.query);

//     res.json(req.query);

// });

// app.listen(port, function() {
//     console.log(`Server running at http://localhost:${port}`);
// });





//  Test in Postman

// Select:

// GET

// URL:

// http://localhost:3000/todos?completed=true

// Click Send.

// Postman response:
// {
//     "completed": "true"
// }
// Terminal:
// { completed: 'true' }





// Multiple query parameters

// Now try:

// http://localhost:3000/todos?completed=true&limit=5

// You'll get:

// {
//     "completed": "true",
//     "limit": "5"
// }

// You can access them individually:

// req.query.completed

// → "true"

// and:

// req.query.limit

// → "5"












// 🟢 5. req.headers

// This is important because headers are used heavily in real APIs, especially later for authentication.

// Definition

// req.headers is an Express request property that contains the HTTP headers sent by the client along with the request.







// const express = require("express");

// const app = express();

// const port = 3000;

// // req.headers contains headers sent by the client
// app.get("/todos", function(req, res) {

//     console.log(req.headers);

//     res.send("Headers received");

// });

// app.listen(port, function() {
//     console.log(`Server running at http://localhost:${port}`);
// });





// 🟢 6. req.body

// You've already used req.body while learning POST, but now we'll understand it properly as part of the req object.






const express = require("express");

const app = express();

const port = 3000;

// Allows Express to read JSON request bodies
app.use(express.json());

app.post("/todos", function(req, res) {

    console.log(req.body);

    res.json({
        message: "Data received",
        data: req.body
    });

});

app.listen(port, function() {
    console.log(`Server running at http://localhost:${port}`);
});
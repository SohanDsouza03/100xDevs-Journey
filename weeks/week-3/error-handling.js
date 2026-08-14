const express = require("express");

const app = express();


// This middleware allows Express to read JSON data
// sent in the request body.
//
// Example JSON:
// {
//     "kidneys": [1, 2]
// }
app.use(express.json());


// =====================================================
// ROUTE
// =====================================================

app.post("/health-checkup", function (req, res) {

    // Get the kidneys array from the request body
    const kidneys = req.body.kidneys;

    // Get the length of the kidneys array
    //
    // If kidneys is undefined, this line will throw
    // an error because undefined.length does not exist.
    const kidneyLength = kidneys.length;

    // Send the number of kidneys
    res.send("Your kidney length is " + kidneyLength);
});


// =====================================================
// GLOBAL ERROR-HANDLING MIDDLEWARE
// =====================================================

// This is a special type of middleware.
//
// Normal middleware:
// function (req, res, next)
//
// Error-handling middleware:
// function (err, req, res, next)
//
// Express recognizes this as an error handler
// because it has FOUR parameters.

app.use(function (err, req, res, next) {

    // Print the actual error in the terminal.
    // This is useful for debugging.
    console.error(err);

    // Send a generic error message to the client.
    //
    // We don't expose the actual internal error
    // to the user.
    res.status(500).send("An internal server error occurred");
});


// =====================================================
// START SERVER
// =====================================================

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
// Express.js is a lightweight web framework for Node.js
// used to create HTTP servers and APIs.

const express = require("express");

const app = express();

const port = 3000;


// --------------------------------------------------
// Normal JavaScript logic
// --------------------------------------------------

// This function calculates the sum from 1 to n.
//
// Example:
// calculateSum(5)
// → 1 + 2 + 3 + 4 + 5
// → 15

function calculateSum(n) {

    let ans = 0;

    for (let i = 1; i <= n; i++) {
        ans = ans + i;
    }

    return ans;
}


// --------------------------------------------------
// Express GET route
// --------------------------------------------------

// Client can send n through the URL:
//
// http://localhost:3000/?n=10
//
// ?n=10 is called a query parameter.
//
// req.query.n gives us the value of n.

app.get("/", function(req, res) {

    // Get n from the query parameter
    const n = Number(req.query.n);

    // Pass n to our normal JavaScript function
    const ans = calculateSum(n);

    // Send the calculated answer back to the client
    res.send(String(ans));

});


// --------------------------------------------------
// Start the server
// --------------------------------------------------

app.listen(port, function() {

    console.log(`Server running at http://localhost:${port}`);

});
// const express = require("express");

// const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "sohan" || password != "passs") {
//     res.status(400).json({"msg": "Somethings up with your inputs"})
//     return
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({"msg": "Somethings up with your inputs"})
//     return
//   }
//   // do something with kidney here
//   res.json({
//     msg: "Your kidney is fine!"
//   })

  
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });









const express = require("express");

const app = express();


// =====================================================
// 1. USER MIDDLEWARE
// =====================================================

// Middleware is just a function that runs BEFORE
// the final route handler.
//
// req  -> contains information about the request
// res  -> used to send a response
// next -> tells Express to move to the next middleware
//         or the final route handler

function userMiddleware(req, res, next) {

    // Get username from request headers
    const username = req.headers.username;

    // Get password from request headers
    const password = req.headers.password;


    // Check whether username and password are correct
    if (username !== "sohan" || password !== "passs") {

        // If credentials are wrong, stop the request
        // and send an error response.
        res.status(403).json({
            msg: "Incorrect inputs"
        });

        return;
    }


    // If username and password are correct,
    // continue to the next middleware.
    next();
}


// =====================================================
// 2. KIDNEY MIDDLEWARE
// =====================================================

function kidneyMiddleware(req, res, next) {

    // Get kidneyId from query parameters.
    //
    // Example:
    // /health-checkup?kidneyId=1
    //
    // req.query.kidneyId will be "1"
    
    const kidneyId = Number(req.query.kidneyId);


    // A person can have kidneyId 1 or kidneyId 2.
    // Anything else is considered invalid.
    if (kidneyId !== 1 && kidneyId !== 2) {

        // Stop the request if kidneyId is invalid.
        res.status(403).json({
            msg: "Incorrect inputs"
        });

        return;
    }


    // If kidneyId is valid,
    // continue to the actual route handler.
    next();
}


// =====================================================
// 3. HEALTH CHECK ROUTE
// =====================================================

// Here we are using BOTH middlewares:
//
// userMiddleware
//       ↓
// kidneyMiddleware
//       ↓
// final route handler
//
// They execute from LEFT to RIGHT.

app.get(
    "/health-checkup",
    userMiddleware,
    kidneyMiddleware,
    function (req, res) {

        // This code runs ONLY when
        // both middlewares successfully call next().

        res.json({
            msg: "Your kidney is fine!"
        });
    }
);


// =====================================================
// 4. KIDNEY REPLACEMENT ROUTE
// =====================================================

// Suppose we introduce another route for
// kidney replacement.
//
// We still need the same username/password
// and kidney validation.
//
// Instead of copying the validation code,
// we simply reuse the middlewares.

app.get(
    "/kidney-replacement",
    userMiddleware,
    kidneyMiddleware,
    function (req, res) {

        res.json({
            msg: "Kidney replacement can be performed"
        });
    }
);


// =====================================================
// 5. HEART CHECK ROUTE
// =====================================================

// For this route, we only need to check
// username and password.
//
// We DON'T need kidneyMiddleware because
// this route has nothing to do with kidneys.

app.get(
    "/heart-check",
    userMiddleware,
    function (req, res) {

        res.json({
            msg: "Your heart is healthy!"
        });
    }
);


// =====================================================
// 6. START THE SERVER
// =====================================================

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
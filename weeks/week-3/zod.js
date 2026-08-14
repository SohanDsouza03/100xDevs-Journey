const express = require("express");
const z = require("zod");

const app = express();

// This allows Express to read JSON from the request body.
app.use(express.json());


// --------------------------------------------------
// ZOD SCHEMA
// --------------------------------------------------

// We are saying:
//
// kidneyId MUST be either "1" OR "2".
//
// "1" -> valid
// "2" -> valid
// "3" -> invalid
// "hello" -> invalid

const kidneysInput = z.literal("1").or(z.literal("2"));


// --------------------------------------------------
// ROUTE
// --------------------------------------------------

app.post("/health-checkup", function (req, res) {

    // Get kidneyId from the request body.
    //
    // Example:
    // {
    //     "kidneyId": "1"
    // }

    const kidneyId = req.body.kidneyId;


    // Ask Zod to validate the input.
    const validation = kidneysInput.safeParse(kidneyId);


    // If validation failed...
    if (!validation.success) {

        res.status(400).json({
            msg: "Incorrect input"
        });

        return;
    }


    // This code executes only when validation succeeds.
    res.json({
        msg: "Your kidney ID is " + kidneyId
    });
});


// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
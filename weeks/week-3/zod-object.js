const express = require("express");
const z = require("zod");

const app = express();


// --------------------------------------------------
// MIDDLEWARE
// --------------------------------------------------

// Allows Express to read JSON request bodies.
app.use(express.json());


// --------------------------------------------------
// ZOD SCHEMA
// --------------------------------------------------

// We define exactly what the request body should contain.
//
// email     -> must be a string
// password  -> must be a string with minimum 8 characters
// country   -> must be either "IN" or "US"
// kidneys   -> must be an array containing numbers

const schema = z.object({

    email: z.string(),

    password: z.string().min(8),

    country: z.literal("IN").or(z.literal("US")),

    kidneys: z.array(z.number())
});


// --------------------------------------------------
// ROUTE
// --------------------------------------------------

app.post("/health-checkup", function (req, res) {

    // Get the complete request body.
    const body = req.body;


    // Validate the complete body using Zod.
    const response = schema.safeParse(body);


    // If validation fails...
    if (!response.success) {

        res.status(400).json({
            msg: "Invalid input",
            error: response.error.issues
        });

        return;
    }


    // If validation succeeds,
    // response.data contains the validated data.

    res.json({
        msg: "Input is valid!",
        data: response.data
    });
});


// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
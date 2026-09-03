const mongoose = require("mongoose");
const { User, Course } = require("./models");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/myapp")
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error);
    });
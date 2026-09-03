const mongoose = require("mongoose");

// ===============================
// User Schema
// ===============================

const UserSchema = new mongoose.Schema({
    // User's email address
    email: String,

    // User's password
    password: String,

    // Courses purchased by the user
    purchasedCourses: [
        {
            // Store the ID of the Course document
            type: mongoose.Schema.Types.ObjectId,

            // This ID refers to the Course model
            ref: "Course"
        }
    ]
});


// ===============================
// Course Schema
// ===============================

const CourseSchema = new mongoose.Schema({
    // Name/title of the course
    title: String,

    // Price of the course
    price: Number
});


// ===============================
// Creating Models
// ===============================

// Create User model using UserSchema
const User = mongoose.model("User", UserSchema);

// Create Course model using CourseSchema
const Course = mongoose.model("Course", CourseSchema);


// Export the models
module.exports = {
    User,
    Course
};
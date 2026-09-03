const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sohan0113:WqIcDCWmyWNjja7F@cluster0.l1xjyfl.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:string,
    password:string
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:string,
    password:string,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    tile:string,
    description:string,
    imageLink:string,
    price:number
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

const router = Router();

router.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.create({
            username: username,
            password: password
        });

        const token = jwt.sign(
            { username: user.username },
            process.env.JWT_SECRET
        );

        res.status(201).json({
            message: "User created successfully",
            token: token
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating user"
        });
    }
});

router.get("/courses", userMiddleware, async (req, res) => {
    try {
        const courses = await Course.find({});

        res.json({
            courses: courses
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching courses"
        });
    }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        await User.findOneAndUpdate(
            { username: decoded.username },
            {
                $push: {
                    purchasedCourses: req.params.courseId
                }
            }
        );

        res.json({
            message: "Course purchased successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error purchasing course"
        });
    }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({
            username: decoded.username
        }).populate("purchasedCourses");

        res.json({
            purchasedCourses: user.purchasedCourses
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching purchased courses"
        });
    }
});

module.exports = router;
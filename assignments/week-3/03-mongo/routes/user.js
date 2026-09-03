const { Router } = require("express");
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

const router = Router();

router.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        await User.create({
            username: username,
            password: password
        });

        res.status(201).json({
            message: "User created successfully"
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
        const courseId = req.params.courseId;

        await User.findOneAndUpdate(
            {
                username: req.headers.username
            },
            {
                $push: {
                    purchasedCourses: courseId
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
        const user = await User.findOne({
            username: req.headers.username
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
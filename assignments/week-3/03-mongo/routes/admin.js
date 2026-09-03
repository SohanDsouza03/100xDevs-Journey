const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");

const router = Router();

router.post("/signup", async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;

        await Admin.create({
            username: username,
            password: password
        });

        res.status(201).json({
            message: "Admin created successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating admin"
        });
    }
});

router.post("/courses", adminMiddleware, async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const imageLink = req.body.imageLink;

        const course = await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink
        });

        res.status(201).json({
            message: "Course created successfully",
            courseId: course._id
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating course"
        });
    }
});

router.get("/courses", adminMiddleware, async (req, res) => {
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

module.exports = router;
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded) {
            next();
        } else {
            res.status(403).json({
                message: "User authentication failed"
            });
        }
    } catch (error) {
        res.status(403).json({
            message: "User authentication failed"
        });
    }
}

module.exports = userMiddleware;
const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded) {
            next();
        } else {
            res.status(403).json({
                message: "Admin authentication failed"
            });
        }
    } catch (error) {
        res.status(403).json({
            message: "Admin authentication failed"
        });
    }
}

module.exports = adminMiddleware;
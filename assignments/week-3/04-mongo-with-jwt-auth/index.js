require("dotenv").config();

const express = require("express");

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(express.json());

app.use("/admin", adminRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
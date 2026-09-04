const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sohan0113:WqIcDCWmyWNjja7F@cluster0.l1xjyfl.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}
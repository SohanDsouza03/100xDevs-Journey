import { useState } from "react";

function App() {

    // todos = current list of todos
    // setTodos = function used to update the todos
    // useState(...) = gives us the initial todo list
    const [todos, setTodos] = useState([
        {
            title: "Go to gym",
            description: "Go to gym from 7-9",
            completed: false
        },
        {
            title: "Study DSA",
            description: "Study DSA from 9-10",
            completed: true
        },
        {
            title: "Study DSA",
            description: "Study DSA from 9-10",
            completed: true
        }
    ]);

    // This function adds a new todo to the existing todos
    function addTodo() {

        // [...todos] means:
        // Take all existing todos and copy them into a new array
        //
        // Example:
        // todos = [1, 2]
        // [...todos, 3] = [1, 2, 3]
        //
        // Then we add a new todo object at the end
        setTodos([
            ...todos,
            {
                title: "new Todo",
                description: "desc of new todo"
            }
        ]);
    }

    return (
        <div>

            {/* Clicking this button calls addTodo() */}
            <button onClick={addTodo}>
                Add a random todo
            </button>

            {/* 
                todos.map() goes through every todo in the array.

                For each todo, we create a Todo component
                and send its title and description as props.

                Example:
                todo.title → "Go to gym"
                todo.description → "Go to gym from 7-9"
            */}
            {todos.map(function(todo) {
                return (
                    <Todo
                        title={todo.title}
                        description={todo.description}
                    />
                );
            })}

        </div>
    );
}


// Todo is a separate component
// props contains the data sent from App
function Todo(props) {

    return (
        <div>
            {/* Display the todo title */}
            <h1>{props.title}</h1>

            {/* Display the todo description */}
            <h2>{props.description}</h2>
        </div>
    );
}

export default App;
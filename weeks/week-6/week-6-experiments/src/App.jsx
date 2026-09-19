import React, { useState } from "react";
import "./App.css";

function initialValue() {
  console.log("function called!");
  return 0;
}

function App() {
  const [name, setName] = useState("Dipesh");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(initialValue());
  const [names, setNames] = useState([]);

  function changeName() {
    console.log("clicked!");
    setFlag(!flag);
  }

  function increment() {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
  }

  function decrement() {
    return setSteps(steps - 1);
  }

  function addNames(e) {
    e.preventDefault();

    setNames([
      ...names,
      {
        id: names.length,
        name: name,
      },
    ]);

    setName("");
  }

  return (
    <div className="App">
      <div>Hello, {flag ? name : ""}</div>

      <button onClick={changeName}>Click Me</button>

      <hr />

      <button onClick={increment}>+</button>

      <div>{steps}</div>

      <button onClick={decrement}>-</button>

      <hr />

      <form onSubmit={addNames}>
        <input
          type="text"
          value={name}
          placeholder="add names"
          onChange={(e) => setName(e.target.value)}
        />

        <button>Submit</button>
      </form>

      <hr />

      <ul>
        {names.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
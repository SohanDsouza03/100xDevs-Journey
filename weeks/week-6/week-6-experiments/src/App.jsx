import { useState } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Header title="My name is Carol" />
    </div>
  );
}

function HeaderWithButton() {
  const [firstTitle, setFirstTitle] = useState("my name is Sohan");

  function changeTitle() {
    setFirstTitle("My name is " + Math.random());
  }

  return (
    <>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title={firstTitle} />
    </>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
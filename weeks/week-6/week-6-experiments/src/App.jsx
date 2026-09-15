import React, {Fragment} from 'react'
import {useState} from 'react'

function App() {
  const [title, setTitle] = useState("My name is Sohan");
  

  function updatetitle() {
    setTitle("My name is "+ Math.random());
  }


   
  return (
    <Fragment>
      <button onClick={updatetitle}>update the  title</button>
      <Header title={title} />
      <Header title="My name is carol" />
      <Header title="my name is Sohan1" />
      <Header title="My name is carol1" />
    </Fragment>
  )
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App
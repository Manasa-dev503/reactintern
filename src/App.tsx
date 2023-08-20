import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
function App() {
  const [count,setcount] = React.useState(1)
  
  function inc(){
    setcount(count+1)
  }
  function dec(){
    setcount(count-1)
  }

  

  return (
    <>
    <h1>{count}</h1>
    <button onClick={inc}>increment</button>
    <button onClick={dec}>Decrement</button>

    </>
  )
}

export default App

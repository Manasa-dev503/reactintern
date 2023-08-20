import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
function App() {
  const [todos,setTodos] = React.useState(["manasa","kavya","priya","smiley"])
  function abc(){
    const x = (document.getElementById('dd') as HTMLInputElement).value;
    setTodos([...todos,x])
    

    
  }


  

  return (
    <>
    <input type="text" id='dd' /> &nbsp;
    <button onClick={abc}>Add List</button>
    {
      todos.map((a)=>{
        return <li>{a}</li>
      })
    }
   
    </>
  )
}

export default App

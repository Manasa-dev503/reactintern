
import './App.css'
import React from 'react'
import ReactDOM from 'react-dom/client'

function App() { 

  const [table,settable] = React.useState([
    {
      firstname : "manasa",
      lastname : "bathina",
      age : "22"
    },
    {
      firstname : "kalyani",
      lastname : "gadde",
      age : "28"
    },
    {
      firstname : "kavya",
      lastname : "reddy",
      age : "26"
    },
    {
      firstname : "rahul",
      lastname : "reddy",
      age : 40
    }
  ])
  function abc(){
    settable([...table].sort((b,c)=>{
      return (b.firstname<c.firstname)?-1:1

    }))
  }
  function bcd(){
    settable([...table].sort((b,c)=>{
      return (b.lastname<c.lastname)?-1:1
    }))
  }
  function pqr(){
    settable([...table].sort((b,c)=>{
      return (b.age<c.age)?-1:1
    }))
  }
  return (
    <>
    <table border={1}>
        <thead>
          <th onClick={abc}>Firstname</th>
          <th onClick={bcd}>Lastname</th>
          <th onClick={pqr}>Age</th>
        </thead>
        
        <tbody>
          {
          
          
            table.map((v)=>{
              return <tr><td>{v.firstname}</td><td>{v.lastname}</td><td>{v.age}</td></tr>
            })
            
          }

          
        </tbody>

        
      </table>


    </>
  )
}

export default App


import './App.css'

function App() {
  const ob = [
    {
      firstname : "Praveen",
      lastname : "Gubbala",
      Age : 40,
      Gender : "male"
    },
    {
      firstname : "Smrithi",
      lastname : "mandana",
      Age : 25,
      Gender : "female"

    },
    {
      firstname : "mithali",
      lastname : "raj",
      Age : 39,
      Gender : "female"
    },
    {
      firstname : "rohit",
      lastname : "sharma",
      Age : 35,
      Gender : "male"
    },
    {
      firstname : "sachin",
      lastname : "tendulkar",
      Age : 50,
      Gender : "male"
    }
  ]

  

  return (
    <>
    {
      ob.map((a)=>{
        return (
          
          <div style={{border:"1px solid",margin:"20px"}}><h1 style={(a.Gender==="male")?{backgroundColor:"lightblue"}:{backgroundColor:"pink"}}>Firstname:{a.firstname}<br></br>
          Lastname:{a.lastname}<br></br>
          Age:{a.Age}<br></br>
          Gender:{a.Gender}<br></br>

          </h1>
          </div>
          
        )
      })
    }
  
      
    </>
  )
}

export default App

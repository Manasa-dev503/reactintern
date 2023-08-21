
import './App.css'

function App() {
  const ob = [
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
  ]
  function abc(){
    ob.sort((b,c)=>{
      return (b.firstname<c.firstname)?-1:1

    })
  

    
  }

  

  return (
    <>
    
    
      <table border={1}>
        <thead>
          <th onClick={abc}>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </thead>
        
        <tbody>
          {
          
          
            ob.map((v)=>{
              return <tr><td>{v.firstname}</td><td>{v.lastname}</td><td>{v.age}</td></tr>
            })
            
          }

          
        </tbody>

        
      </table>


    </>
  )
}

export default App

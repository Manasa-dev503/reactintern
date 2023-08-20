
import './App.css'

function App() {
  const student = [
    {
      firstname : "manasa",
      lastname : "bathina",
      gender : "female"
    },
    {
      firstname : "sruthi",
      lastname : "gundlapalli",
      gender : "female"
    },
    {
      firstname : "praveen",
      lastname : "gadde",
      gender : "male"
    },
    {
      firstname : "maneesha",
      lastname : "samanthapudi",
      gender : "female"
    }
  ]
return (
    <>
      <table border={1}>
        <thead>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Gender</th>
        </thead>
        <tbody>
        {
          
            student.map((b)=>{
              return <tr style={(b.gender==="female")?{backgroundColor:"pink"}:{backgroundColor:"lightblue"}}><td>{b.firstname}</td><td>{b.lastname}</td><td>{b.gender}</td></tr>
            })
          
        }
        </tbody>

      </table>
    </>
  )
}

export default App

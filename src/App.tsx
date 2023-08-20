
import './App.css'

function App() {
  const students = [
    {
      firstname : "manasa",
      lastname  : "bathina",
      gender : "female"
    },
    {
      firstname : "srikanth",
      lastname : "reddy",
      gender : "male"
    },
    {
      firstname : "priyanka",
      lastname : "chowdary",
      gender : "female"
    },
    {
      firstname : "rahul",
      lastname : "reddy",
      gender : "male"
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
          students.map((a)=>{
            return (<tr className={a.gender==="male"?"male":"female"}>
              <td>{a.firstname}</td>
              <td>{a.lastname}</td>
              <td>{a.gender}</td>
              </tr>)
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default App

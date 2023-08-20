
import './App.css'

function App() {
  const students = [
    {
      firstname : "manasa",
      lastname  : "bathina",
      age : 22,
      im : <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width={100}    alt="" />
    },
    {
      firstname : "srikanth",
      lastname : "reddy",
      age : 19,
      im : <img src="https://www.shutterstock.com/shutterstock/photos/1509139481/display_1500/stock-vector-cute-kid-teen-boy-show-facial-expression-1509139481.jpg" width={100}      alt="" />
      
    },
    {
      firstname : "priyanka",
      lastname : "chowdary",
      age : 27,
      im : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx44JBbcb2f9xsUZ2YLhREZhuJRolPxPcVoDhmfIStE4yqsWLXMoe6rmRWbW-Lxabphrk&usqp=CAU"  width={100} alt="" />

    },
    {
      firstname : "rahul",
      lastname : "reddy",
      age : 26,
      im : <img src="https://img.freepik.com/free-vector/little-boy-anime-with-cap_18591-77249.jpg?w=2000" width={100}   alt="" />
    }
  ]

  

  return (
    <>
    <table border={1}>
      <tbody>
        {
          students.map((a)=>{
            return (<tr>
              <td>{a.firstname}</td>
              <td>{a.lastname}</td>
              <td>{a.age}</td>
              <td>{a.im}</td>
              </tr>)
          })
        }
      </tbody>
    </table>
    </>
  )
}
export default App

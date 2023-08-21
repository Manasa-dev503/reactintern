
import './App.css'

function App() {
  const ob = [
    {
      firstname : "Praveen",
      lastname : "Gubbala",
      Age : 40,
      Gender : "male",
      im : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxr-iiOTgNut32w27xWQYpM1z1nhRpHTcBg&usqp=CAU" width={"100px"} alt="" />
    },
    {
      firstname : "Smrithi",
      lastname : "mandana",
      Age : 25,
      Gender : "female",
      im : <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg" width={"100px"} alt="" />


    },
    {
      firstname : "mithali",
      lastname : "raj",
      Age : 39,
      Gender : "female",
      im : <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1391498.jpg&fm=jpg" width={"100px"}  alt="" />
    },
    {
      firstname : "rohit",
      lastname : "sharma",
      Age : 35,
      Gender : "male",
      im : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxr-iiOTgNut32w27xWQYpM1z1nhRpHTcBg&usqp=CAU" width={"100px"}  alt="" />

    },
    {
      firstname : "sachin",
      lastname : "tendulkar",
      Age : 50,
      Gender : "male",
      im : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwxr-iiOTgNut32w27xWQYpM1z1nhRpHTcBg&usqp=CAU" width={"100px"} alt="" />

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
          {a.im}
          </h1>
          </div>
          
        )
      })
    }
  
      
    </>
  )
}

export default App


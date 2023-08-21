
import './App.css'

function App() {

  const a = 10;
  const b = "manasa"
  const ar = [12,3,14,5,6,9]
  

  return (
    <>
      <h1 style={{color:"maroon"}}>Hello Edupoly</h1>
      <h1 style={{color:"pink",backgroundColor:"green"}}>Hello ReactJS</h1>
      <h1 style={{border:"5px solid black",borderWidth:"20px 10px 20px 10px"}}>Hello Edupoly</h1>
     <h1 style={(a%2===0)?{color:"green"}:{color:"red"}}>{a}</h1> 
     <h1 style={(b.length%2===0)?{color:"green"}:{color:"red"}}>{b}</h1> 
     {
      ar.map((v)=>{
        return (
          <li style={(v%2===0)?{color:"green"}:{color:"red"}}>{v}</li>
        )

      })
     }
    </>
  )
}

export default App

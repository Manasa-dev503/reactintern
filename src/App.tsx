
import './App.css'

function App() {
  const ar = [12,2,45,29]
  const br = ["manasa","kalyani","smiley"]


  

  return (
    <>
  
      <h1 style={{color:"red",backgroundColor:"green"}}>Hello Edupoly</h1>
      <span style={{display:"flex"}}></span>
      {
        ar.map((a)=>{
          return <span style={{border:"1px solid",margin:"10px"}}>{a}</span>
        })
      }
      {
        br.map((a)=>{
          return <span style={{border:"1px solid",margin:"10px"}}>{a}</span>
        })

      }
    
    </>
  )
}

export default App

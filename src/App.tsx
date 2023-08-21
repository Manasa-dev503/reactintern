
import './App.css'

function App() {
  const obj = {
      name : "manasa",
      gender : "male",
      age : 40
      
    }
  

  

  return (
    <>
    <div style={{border:"1px solid",width:"500px"}}>
    {
      
      Object.entries(obj).map((a)=>{
        return <div style={(a[0]==="name")?{fontWeight:"bold"}:{fontStyle:"italic"}}>{a[0]}:{a[1]}</div>
        
      })
    }
    </div>

    </>
  )
}

export default App


import './App.css'

function App() {
  const ar = [10,20,30,40]

  

  return (
    <>
    {
      ar.map((a)=>{
        return <li>{a}</li>
      })
    }
      
    </>
  )
}

export default App

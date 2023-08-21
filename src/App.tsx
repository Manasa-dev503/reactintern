
import './App.css'

function App() {
  function abc(){
    alert("Hello Edupoly")
  }
  function pqr(){
    console.log("hello edupoly")
  }
  function def(e){
    console.log(e)
  }
  function ghi(e){
    console.log(e)

  }
  function lmn(e){
    console.log(e.target.innerHTML)
  }

  

  return (
    <>
      <button onClick={abc}>Click here to see alert</button>
      <button onClick={pqr}>Click here to see alert</button>
      <button onClick={def}>Click here to see alert</button>
      <div style={{width:"300px",height:"200px",border:"2px solid"}} onClick={ghi}>Click here to see alert</div>
      <div onClick={lmn} style={{width:"300px",height:"200px",border:"2px solid"}}>Welcome to Edupoly ReactJS</div>

    </>
  )
}

export default App

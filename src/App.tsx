
import './App.css'

function App() {
  function abc(e){
    console.log(e.target.id)

  }
  function def(e){
    console.log(e.target.innerHTML)
  }
  function ghi(e){
    console.log(e)
  }
  function lmn(){
    console.log(document.getElementById("d1").value)
  }
  function pqr(){
    document.getElementById("d3").innerHTML=document.getElementById("d2").value
   
  }
  return (
    <>
    <div id='dd' onClick={abc} style={{width:"300px",height:"200px",border:"2px solid"}}>Welcome to Edupoly ReactJS</div>
    <h1 id='df' onClick={def}>Welcome to Edupoly ReactJS</h1>
    <button onClick={ghi}>Click here to see alert</button>
    <input type="text" id='d1' />
    <input type="text" id='d2' />
    <button onClick={pqr}>Click here to see alert</button>
    <h1 id='d3'></h1>
    
      
    </>
  )
}

export default App


import './App.css'

function App() {
  
  function clear(){
    document.getElementById('d2').innerHTML=document.getElementById("d3").value
  
  }
  function def(){
    document.getElementById('d2').innerHTML=""
    document.getElementById('d3').value=""
  }


  function ghi(){
    const x = document.getElementById('d4').value
    const y = document.getElementById('d5').value
    document.getElementById('d6').innerHTML=x+y
  }




  

  

  return (
    <>
    


    <input type="text" id='d3' onKeyUp={clear}/>
    <h1 id='d2'></h1>
    <button onClick={def}>Clear text</button>


    <input type="text" id='d4' />
    <input type="text" id="d5" />
    <button onClick={ghi}>Add</button>
    <h1 id='d6'></h1>
      
    </>
  )
}

export default App

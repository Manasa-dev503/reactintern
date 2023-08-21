
import './App.css'

function App() {
  function abc(){
    document.getElementById('dd').innerHTML = document.getElementById('df').value.toUpperCase()
  }

  function def(){
    document.getElementById('d1').innerHTML = document.getElementById('d2').value
  }

  function ghi(){
    document.getElementById('d4').innerHTML = document.getElementById('d3').value.toUpperCase()
  }

  function lmn(){
    document.getElementById('d5').innerHTML = document.getElementById('d6').value.toUpperCase()
  }



  return (
    <>
    <input type="text" name="" id="df" />
    <button onClick={abc}>Click here to see in uppercase</button>
      <h1 id='dd'></h1>

      <input type="text" onKeyUp={def} id='d2'/>
      <h1 id='d1'></h1>

      <input type="text" onBlur={ghi} id='d3'/>
      <h1 id='d4'></h1>


      <input type="text" onKeyUp={lmn} id='d6'/>
      <h1 id='d5'></h1>

    </>
  )
}

export default App

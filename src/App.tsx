
import './App.css'

function App() {
  function abc(){
    const x = document.getElementById('d1').value
    const y = document.getElementById('d2').value
    document.getElementById('dd').innerHTML=x - y
  }
  function def(){
    const a = document.getElementById('d3').value
    const b = document.getElementById('d4').value
    document.getElementById('df').innerHTML=a * b
  }
  function pqr(){
    const a = document.getElementById('d3').value
    const b = document.getElementById('d4').value
    document.getElementById('df').innerHTML=a / b

  }

  
  

  

  return (
    <>
      <input type="text" id='d1' />
      <input type="text" id='d2' />
      <button onClick={abc}>Add</button>
      <h1 id='dd'></h1>
      <input type="text" id='d3' />
      <input type="text" id='d4' />
      <button onClick={def}>Multiply</button>
      <button onClick={pqr}>Div</button>
      <h1 id='df'></h1>
    </>
  )
}

export default App

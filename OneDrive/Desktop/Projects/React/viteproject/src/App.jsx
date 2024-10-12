import { useState } from "react"
import Card  from './components/card'
import React from "react"

function App() {

  let [counter, setCounter] = useState(5)
  // can be of any name

  const addvalue =function () {
    if(counter < 20)
    setCounter(counter + 1)
  }
  const decvalue = function () {
    // counter = counter - 1
    if(counter > 0)
    setCounter(counter-1)
    
  }
  return (
   <>
   <h1 className="bg-green-500 text-black">React</h1>
   <h2>Counter Value : {counter}</h2>
   <button onClick={addvalue}>Add value</button>
   <br />
   <button onClick={decvalue}>decrease value</button>


   {/* card */}

    let newArray = [23,376,36]
   <Card channel='hello' btnText="Click me"/>
   <Card channel='world'/>

   </>

  )
}

export default App

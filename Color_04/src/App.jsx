import { useState } from 'react'

function App() {
  const [color, setColor] = useState("lavender");
  return (
    <>
    
    <div style={{backgroundColor: color}} className="h-screen w-full flex items-center justify-center flex-row">
      <div className='bg-purple-400 p-2 bottom-2 rounded-full' >
        <button onClick={() => setColor("yellow")}className='p-3 rounded-full'style={{backgroundColor: "yellow" , margin: "5px"}}>Yellow</button>
        <button onClick={() => setColor("pink")}className='p-3 rounded-full'style={{backgroundColor:"pink" , margin: "5px"}}>Pink</button>
        <button onClick={() => setColor("blue")} className='p-3 rounded-full'style={{backgroundColor:"blue", margin: "5px"}}>Blue</button>
        <button onClick={() => setColor("green")} className='p-3 rounded-full'style={{backgroundColor:"green" , margin: "5px"}}>Green</button>
        <button onClick={() => setColor("black")} className='p-3 rounded-full'style={{backgroundColor:"black",  margin: "5px" , color: "white"}}>Black</button>
        <button onClick={() => setColor("purple")} className='p-3 rounded-full'style={{backgroundColor:"purple", margin: "5px"}}>Purple</button>
        <button onClick={() => setColor("orange")} className='p-3 rounded-full'style={{backgroundColor:"orange", margin: "5px"}}>Orange</button>
        <button onClick={() => setColor("red")} className='p-3 rounded-full'style={{backgroundColor:"red", margin: "5px"}}>Red</button>
        <button onClick={() => setColor("white")} className='p-3 rounded-full'style={{backgroundColor:"white",  margin: "5px"}}>White</button>
      </div>
    </div>
    </>
  )
}

export default App

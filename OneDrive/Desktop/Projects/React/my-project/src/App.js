import { useState } from 'react';
import './App.css';

function App() {
  const [color,setColor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
       <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl '>
        <button className='outline-none px-3 bg-red-700 py-1 rounded-full text-white shadow-2xl' onClick={()=>setColor("red")}>Red</button>
        <button className='outline-none px-3 bg-blue-700 py-1 rounded-full text-white shadow-2xl' onClick={()=>setColor("blue")}>Blue</button>
        <button className='outline-none px-3 bg-green-700 py-1 rounded-full text-white shadow-2xl' onClick={()=>setColor("green")}>Green</button>
        <button className='outline-none px-3 bg-black py-1 rounded-full text-white shadow-2xl' onClick={()=>setColor("black")}>Black</button>
        <button className='outline px-3 bg-white-700 py-1 rounded-full text-black shadow-2xl' onClick={()=>setColor("white")}>White</button>
        <button className='outline-none px-3 bg-purple-700 py-1 rounded-full text-white shadow-2xl' onClick={()=>setColor("purple")}>Purple</button>
        <button className='outline-none px-3 bg-red-950 py-1 rounded-full text-white shadow-2xl' onClick={()=>setColor("brown")}>Brown</button>
       </div>
      </div>
    </div>
  );
}

export default App;

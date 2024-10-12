import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [characterAllowed, setcharaterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef = useRef(null);
 const copyPassToClipboard = useCallback (() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,120)
  window.navigator.clipboard.writeText (password )
 } , [password])


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%&+_^";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed, passwordGenerator])
return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-oranger-700 bg-gray-800">
        <h1 className="text-4xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPassToClipboard}
           className="ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-orange-300">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-300">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="numberInput"
              onChange={() => {
                setcharaterAllowed((prev) => !prev);
              }}
            />
            <label className="text-orange-300">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

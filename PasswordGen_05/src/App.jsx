import { useState, useCallback , useEffect ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [Password, setPassword] = useState("");

  // refhook
  const passwordRef = useRef(null);
  // instead of it works but it is used to good UI feature and good user experience

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "[]{}~!@#$%^&*()_+|";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passowrdToClipboard = useCallback(() => {
   window.navigator.clipboard.writeText(Password);
   passwordRef.current?.select();
   alert("Password Copied to Clipboard");
  }, [Password]);

  useEffect(() => {
    generatePassword();
  },[length, numberAllowed, charAllowed, generatePassword]);

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>
      <div className="flex justify-center items-center ">
        <div className=" h-50 w-200 rounded-lg m-10 bg-slate-900 shadow-md">
          <div className="m-5 rounded-md h-10 w-auto bg-gray-200 flex ">
            <input
              type="text"
              className="w-full h-full py-1 px-3 font-bold rounded-lg text-2xl italic text-orange-700 outline-none"
              value={Password}
              placeholder="Password"
              readOnly
              ref ={passwordRef}
            />
            <button className="bg-blue-600 px-4 py-1 h-full outline-none rounded-r-md font-bold shrink-0 hover:opacity-70 active:text-white transition-all duration-200"
            onClick={passowrdToClipboard}
            >
              Copy
            </button>
          </div>

          <div className="flex justify-around mt-15 gap-x-2">
            <div className=" flex items-center gap-x-4">
              <input type="range" min="6" max="20" value={length}
              className="cursor-pointer "
              onChange={(e)=>{setLength(e.target.value)}} />
              <label className="text-orange-500 font-bold text-1.8xl">Length: {length}</label>
            </div>

            <div className="flex items-center  gap-x-4">
              <input type="checkbox" id="number" onChange={(e)=>{setNumber(Number(e.target.checked))}} />
              <label className=" text-orange-500 font-bold text-1.8xl" htmlFor="number">Include Numbers</label>
            </div>

            <div className="flex items-center gap-x-4">
              <input 
              type="checkbox" id="char" onChange={(e)=>{setChar(e.target.checked)}} />
              <label className=" text-orange-500 font-bold text-1.8xl" htmlFor="char">Include Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

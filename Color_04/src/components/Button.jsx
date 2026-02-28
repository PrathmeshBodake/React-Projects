import { set } from "mongoose";
import {useState} from "react"
export default function Button({ label }) {
    
   
    
  return (
    <button className="mt-5 ml-3 relative z-0 rounded bg-green-500 px-10 py-3 transition-all duration-300 ease-in-out
      after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0
      after:rounded after:bg-pink-700 after:transition-all after:duration-300
      hover:after:w-full"
      onClick={setColor(`bg-${label.toLowerCase()}-500`)}>
      {label}
    </button>
  );
}

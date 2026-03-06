import { useState , useContext} from "react";
import UserContext from "../context/userContext";

export default function Login() {
    const [show , setshow] = useState(false);
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }

    return(
        <div className="bg-slate-900 p-10 flex flex-col justify-center items-center gap-y-4 p-5 rounded-lg">
            <input type="text"
            className="bg-sky-100  text-orange-500 font-bold italic text-2xl border-1 w-full border-slate-300 rounded-md px-2 pb-1 m-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             placeholder="Username"/>
            <div className="flex justify-center align-center w-full"><input 
                type={show ? "text" : "password"}
                className="text-black font-bold bg-sky-100 border-1 w-full border-slate-300 rounded-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"/>
                <div className="mt-2 w-12 h-10 rounded-full bg-sky-100 flex align-center justify-center"><img 
                    className="p-2 cursor-pointer   "
                    onClick={()=>{setshow(!show)}}
                    src={show ? "https://cdn-icons-png.flaticon.com/128/709/709612.png" : "https://cdn-icons-png.flaticon.com/128/2767/2767146.png"} alt="" />
                </div>
            </div>
            <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200">
                Submit
            </button>
        </div>
    )

}
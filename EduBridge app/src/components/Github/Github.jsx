
import { useEffect , useState  } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {

    const data = useLoaderData();

    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/prathmeshbodake")
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //             setData(res)
    //     })
    // },[])


    return(
        <div className="flex h-auto w-full items-center justify-center bg-slate-100">
            <img 
            className="rounded-full w-48 h-48 border-4 border-gray-300 m-20"
            src={data.avatar_url} alt="" />
            <div>
                <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
                <p className="text-lg">{data.bio}</p>
            </div>
            
        </div>
    )
}

export async function isLoader(){

    const data = await fetch("https://api.github.com/users/prathmeshbodake")
    
    return data.json();

}
import React , {useContext} from "react"
import UserContext from "../context/userContext";



export default function Profile() {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div className = "font-bold text-2xl bg-blue-200 p-10 rounded-lg w-105 h-auto">Please log in to see your profile.</div>;
    }else {
        return (
            <div className="bg-blue-200 p-5 rounded-lg w-105 h-auto">
                <h1 className="font-bold text-2xl text-center  ">Welcome, {user.username}!</h1>
            </div>
        );
    }
}
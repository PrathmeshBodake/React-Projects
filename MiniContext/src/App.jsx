import UserContextProvider from "./context/userContextProvider"
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  

  return (
    <div className="h-screen w-screen bg-slate-200 flex flex-col justify-center items-center gap-y-10">
      <UserContextProvider>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App

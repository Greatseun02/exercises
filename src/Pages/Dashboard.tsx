import { useContext } from "react"
import { userContext } from "../context/UserContext";
import { Link } from "react-router-dom";


export default function Dashboard() {
    const value = useContext(userContext);

    return (
        
        value?.user
        
        ?

        <div>
            <h1>Welcome, {value?.user}</h1>
            <button onClick={value?.logout}>
                Logout
            </button>
        </div>

        : 

        <Link to={"/login"}>
            Login
        </Link>
    

  )
}

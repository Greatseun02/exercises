import { useContext, useState, type FormEvent } from "react"
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


    const users = [
        { name: "alice", password: "alice123" },
        { name: "bob", password: "bobSecure!" },
        { name: "charlie", password: "charliePass1" },
    ];

  const navigate = useNavigate();
  
  const value = useContext(userContext);

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    users.forEach(user => {
        if(user.name === userName && user.password === password){
            value?.login(userName);
            navigate("/dashboard");
        }
    })

    setUserName("");
    setPassword("");
  }

  return (
    <form onSubmit={(event)=>handleSubmit(event)}>
        <input
            value={userName}
            onChange={event => setUserName(event.target.value)} 
            placeholder="Enter UserName"
        />
        <input
            value={password}
            onChange={event => setPassword(event.target.value)} 
              placeholder="Enter UserName"
        />
        <button>
            Submit
        </button>
    </form>
  )
}

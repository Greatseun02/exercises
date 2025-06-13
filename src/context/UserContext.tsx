import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react"

type userType = string;

type userContextValue = {
    user: userType,
    setUser: Dispatch<SetStateAction<userType>>
    login: (value: string)=> void;
    logout: ()=> void;
};


export const userContext = createContext<userContextValue | undefined>(undefined); 


export default function UserContext({children}: {children: ReactNode}) {
  const [user, setUser] = useState<userType>("");

  function login(userName: string){
    setUser(userName);
  }

    function logout(){
        setUser("");
    }

  return (
    <userContext.Provider value={{user, setUser, login, logout}}>
        {children}
    </userContext.Provider>
  )
}

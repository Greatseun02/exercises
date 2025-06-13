import { useContext } from "react";
import { SwitcherContext } from "../context/SwitcherCreate";


export default function useSwitcherContext() {
  const context = useContext(SwitcherContext);
  
  if(context){
    return context;
  }

  throw new Error("Context not found.")
}

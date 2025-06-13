import useSwitcherContext from "../hooks/useSwitcherContext"

export default function Home() {
  const {mode, setMode} = useSwitcherContext();
  
  return (
    <div className={ `home ${mode === "light" ? "light" : "black"}`}>
        <h1>This is my Webpage</h1>
        <p>The rumbling is coming!!!</p>
        <button onClick={
            ()=> {
                if(mode === "dark"){
                    setMode("light")
                }else{
                    setMode("dark")
                }
            }
        }>
            Click me
        </button>
    </div>
  )
}

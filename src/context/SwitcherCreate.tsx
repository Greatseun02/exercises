import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type modeType = "light" | "dark";

export type contextValue = {
    mode: modeType,
    setMode: Dispatch<SetStateAction<modeType>>;
}

export const SwitcherContext = createContext<contextValue | undefined>(undefined);


export default function SwitcherCreateProvider({children}: {children: ReactNode} ) {
  const [mode, setMode] = useState<modeType>("light"); 
  

  return (
    <SwitcherContext.Provider value={{mode: mode, setMode: setMode}}>
        {children}
    </SwitcherContext.Provider>
  )
}

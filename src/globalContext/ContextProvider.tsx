import { useState,ReactNode } from "react";
import ContectContext from "./GlobalContext"

const ContextProvider: React.FC<{children:ReactNode}> = ({children})=>{
    const [ContectData, setContectData] = useState("");

  return (
    <ContectContext.Provider value={{ ContectData, setContectData }}>
      {children}
    </ContectContext.Provider>
  );
};

export default ContextProvider;
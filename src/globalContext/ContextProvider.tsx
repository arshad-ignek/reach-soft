import { useState,ReactNode } from "react";
import ContectContext from "./GlobalContext"

const ContextProvider: React.FC<{children:ReactNode}> = ({children})=>{
    const [ContactData, setContactData] = useState({});
    console.log(ContactData,"ContactData")
  return (
    <ContectContext.Provider value={{ ContactData, setContactData }}>
      {children}
    </ContectContext.Provider>
  );
};

export default ContextProvider;
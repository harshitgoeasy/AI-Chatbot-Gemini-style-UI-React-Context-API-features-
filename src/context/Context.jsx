import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props)=>{

  const onSent = async(prompt)=>{
     const reply = await runChat(prompt);
     console.log("Gemini says : " , reply);
     console.log("first output")
  }

  onSent("what is react JS")

  const contextValue = {

  }

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider ;
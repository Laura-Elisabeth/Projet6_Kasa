import { useState, createContext } from "react";

export const AccomodationContext = createContext()

export const AccomodationProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
    setAnswers({...answers, ...newAnswers})
  }

  return (
    <AccomodationContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </AccomodationContext.Provider>
  )
}
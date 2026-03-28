import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {

  const [sessions, setSessions] = useState([]);

  
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("postdata")) || [];
    setSessions(stored);
   
  }, []);

 
  useEffect(() => {
    localStorage.setItem("postdata", JSON.stringify(sessions));
  }, [sessions]);


  const addSession = (newSession) => {
    setSessions((prev) => [...prev, newSession]);
  };


  const deleteSession = (index) => {
    setSessions((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SessionContext.Provider value={{ sessions, addSession, deleteSession }}>
      {children}
    </SessionContext.Provider>
  );
};
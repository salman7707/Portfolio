"use client";
import { createContext, useContext, useState } from "react";

interface ContextProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const context = createContext<ContextProps | undefined>(undefined);

export function Provider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("dark");
  return (
    <context.Provider value={{ theme, setTheme }}>{children}</context.Provider>
  );
}
export const useMyContext = () => {
  const contextValue = useContext(context);
  if (contextValue === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return contextValue;
};

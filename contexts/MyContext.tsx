import React, { createContext, ReactNode, useContext, useState } from "react";

interface MyContextType {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  componentCount: number;
  setComponentCount: React.Dispatch<React.SetStateAction<number>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export function MyProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<string>("initialized value");
  const [componentCount, setComponentCount] = useState<number>(0);

  return (
    <MyContext.Provider
      value={{ value, setValue, componentCount, setComponentCount }}
    >
      {children}
    </MyContext.Provider>
  );
}

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  globalValue: any;
  setGlobalValue: React.Dispatch<React.SetStateAction<any>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [globalValue, setGlobalValue] = useState<any>(null);

  return (
    <GlobalContext.Provider value={{ globalValue, setGlobalValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

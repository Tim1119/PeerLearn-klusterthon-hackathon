import React, { createContext, useContext, useState,  ReactNode } from 'react';


interface AppContextType {
  user:  null;
 
}
const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user] = useState<null>(null);
  
 
  return (
    <AppContext.Provider value={{ user}}>
      {children}
    </AppContext.Provider>
  );
};

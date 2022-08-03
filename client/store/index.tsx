import React, { createContext } from 'react';
import { useContext } from 'react';

const DataContext = createContext(null);

export const DataProvider = ({ children, value }) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);

export const useData = () => {
  const context = useContext(DataContext);

  return context;
};

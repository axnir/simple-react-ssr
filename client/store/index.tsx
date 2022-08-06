import { createContext, useContext } from 'react';

interface DataContextInterface {
  info: string;
}

const DataContext = createContext<DataContextInterface | null>(null);

export const DataProvider = ({ children, value }) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);

export const useData = () => {
  const context = useContext(DataContext);

  return context;
};

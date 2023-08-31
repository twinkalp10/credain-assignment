import React, { createContext, useState } from "react";
import { TransactionDataType } from "../../../types/type";

type DataContextType = {
  sortedData: TransactionDataType[];
  setSortedData: React.Dispatch<React.SetStateAction<TransactionDataType[]>>;
};

type DataContextProviderType = {
  children: React.ReactNode;
};

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const useDataContextValues = () => {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error(
      "useDataContextValues must be used within a DataContextProvider"
    );
  }
  return context;
};

export const DataContextProvider = ({ children }: DataContextProviderType) => {
  const [sortedData, setSortedData] = React.useState<TransactionDataType[]>([]);
  const [editedTransaction, setEditedTransaction] = useState<
    TransactionDataType | undefined
  >();

  return (
    <DataContext.Provider value={{ sortedData, setSortedData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

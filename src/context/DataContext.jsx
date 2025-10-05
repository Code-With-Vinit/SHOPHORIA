import axios from "axios";
import { useState, createContext } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  const fetchAllProducts=async()=>{
        try {
            const response= await axios.get('https://fakestoreapi.com/products');
            console.log(response);
            const productsData=response.data;
            setData(productsData);
        } catch (error) {
            console.log(error);
        }
  }

  return (
    <DataContext.Provider value={{ data, setData,fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

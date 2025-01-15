import React, { createContext, useState, useEffect } from "react";
import useGetPopularRecepies from "../hooks/useGetPopularRecepies";

const PopularContext = createContext();

export const usePopularContext = () => {
  return React.useContext(PopularContext);
};

const PopularContextProvider = ({ children }) => {
  const { recepies, error, loading } = useGetPopularRecepies();
  return (
    <PopularContext.Provider value={{ recepies, error, loading }}>
      {children}
    </PopularContext.Provider>
  );
};

export default PopularContextProvider;

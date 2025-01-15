import React, { createContext, useState, useEffect } from "react";
import useGetPost from "../hooks/useGetPost";

const CommunityContext = createContext();

export const useCommunityContext = () => {
  return React.useContext(CommunityContext);
};

const CommunityContextProvider = ({ children }) => {
  const { post, error, loading } = useGetPost();
  return (
    <CommunityContext.Provider value={{ post, error, loading }}>
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityContextProvider;

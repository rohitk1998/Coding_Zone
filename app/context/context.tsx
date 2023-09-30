"use client";

import React, { useState, createContext, useContext } from "react";

const initialState : any  = {
  isOutsideClicked: false,
  isMenuOpen: false,
};

const appContext = createContext(initialState);

interface AppContextProviderProps {
  children: any;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [isOutSideClicked, setIsOutSideClicked] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <appContext.Provider
     value={{ isOutSideClicked , isMenuOpen,setIsOutSideClicked,setIsMenuOpen}}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = ()=> useContext(appContext);

export { useAppContext, AppContextProvider };

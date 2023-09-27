"use client";

import React, { useState, createContext, useContext } from "react";

const initialState = {
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
      value={{
        isOutSideClicked,
        setIsOutSideClicked,
        setIsMenuOpen,
        isMenuOpen,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

const useAppContext = ()=> useContext(appContext);

export { useAppContext, AppContextProvider };

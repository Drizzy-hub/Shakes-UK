import React, { useState, createContext } from "react";

export const AuthenticatedUserContext = createContext({});

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <AuthenticatedUserContext.Provider
      value={{ user, setUser, userName, setUserName, userData, setUserData }}
    >
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

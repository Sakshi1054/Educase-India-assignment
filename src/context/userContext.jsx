import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [users, setUsers] = useState([]); 

  const signup = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
    setUser(newUser); 
  };

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  return (
    <UserContext.Provider value={{ user, users, signup, login }}>
      {children}
    </UserContext.Provider>
  );
};


export function useUser() {
    return useContext(UserContext)
}

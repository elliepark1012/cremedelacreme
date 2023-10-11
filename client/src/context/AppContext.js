import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  console.log(currentUser)
  const updateUser = (user) => setCurrentUser(user); // Make sure updateUser is defined

  return (
    <AppContext.Provider value={{ restaurants, setRestaurants, currentUser, setCurrentUser, updateUser }}>
      {children}
    </AppContext.Provider>
  );
};
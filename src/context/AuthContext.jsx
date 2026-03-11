import React, { createContext, useState, useEffect, useContext } from 'react';
import { VALID_CREDENTIALS } from '../data/credentials';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorVisible, setErrorVisible] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // Check local storage on mount
    const storedAuth = localStorage.getItem('bt_auth_token');
    if (storedAuth === 'verified_clearance_t7') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (name, password, locationKey) => {
    const normalizedInputName = name.trim().toLowerCase();
    const isNameValid = VALID_CREDENTIALS.validNames.some(
      n => n.toLowerCase() === normalizedInputName
    );

    if (
      isNameValid &&
      password === VALID_CREDENTIALS.password &&
      locationKey === VALID_CREDENTIALS.locationKey
    ) {
      setIsAuthenticated(true);
      setErrorVisible(false);
      setAttempts(0);
      localStorage.setItem('bt_auth_token', 'verified_clearance_t7');
      return true;
    } else {
      setAttempts((prev) => prev + 1);
      setErrorVisible(true);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('bt_auth_token');
  };

  const clearError = () => {
    setErrorVisible(false);
  };

  const value = {
    isAuthenticated,
    loading,
    errorVisible,
    attempts,
    login,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

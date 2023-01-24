import { createContext, useState } from 'react';

import * as authApi from '../apis/auth-api';
import { setAccessToken } from '../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const login = async (emailOrMobile, password) => {
    const res = await authApi.login({ emailOrMobile, password });
    setAccessToken(res.data.accessToken);
    setAuthenticatedUser(true);
  };

  return (
    <AuthContext.Provider value={{ authenticatedUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}

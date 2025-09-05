import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({
  isSignedIn: false,
  user: null,
  signIn: () => {},
  signOut: () => {},
  signUp: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({
    isSignedIn: !!user,
    user,
    signIn: (email) => setUser({ name: 'Chloe', email }),
    signOut: () => setUser(null),
    signUp: (name, email) => setUser({ name, email }),
  }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

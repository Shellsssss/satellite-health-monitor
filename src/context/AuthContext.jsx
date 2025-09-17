import React from "react";
import { createContext, useContext, useState } from "react";

const AuthCtx = createContext(null);

export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
const login = (u, p) => {
// mock auth
setUser({ name: u || "Operator", role: "Admin" });
};
const logout = () => setUser(null);
return (
<AuthCtx.Provider value={{ user, login, logout }}>
{children}
</AuthCtx.Provider>
);
}
export const useAuth = () => useContext(AuthCtx);

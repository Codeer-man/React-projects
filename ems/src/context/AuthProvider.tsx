import { createContext, ReactNode } from "react";

type AuthContextType = string; 

export const AuthContext = createContext<AuthContextType>("");

export default function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <AuthContext.Provider value={"Ramayan"}>{children}</AuthContext.Provider>
    </div>
  );
}

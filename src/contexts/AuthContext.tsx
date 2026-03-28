import React, { createContext, useContext, useState, useEffect } from "react";
import { UserProfile } from "../types";

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  signIn: (email: string, pass: string) => Promise<void>;
  signUp: (email: string, pass: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock auth state check
    const timer = setTimeout(() => {
      // For demo purposes, we'll start with no user
      setUser(null);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const signIn = async (email: string, pass: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({
      uid: "u1",
      email,
      displayName: "Demo User",
      role: "buyer",
      createdAt: new Date().toISOString(),
    });
    setIsLoading(false);
  };

  const signUp = async (email: string, pass: string, name: string) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setUser({
      uid: "u1",
      email,
      displayName: name,
      role: "buyer",
      createdAt: new Date().toISOString(),
    });
    setIsLoading(false);
  };

  const signOut = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

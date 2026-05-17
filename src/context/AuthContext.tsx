import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { demoUsers, type Role, type User } from "../data/mockData";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  hasRole: (...roles: Role[]) => boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = sessionStorage.getItem("nexus_user");
    return stored ? (JSON.parse(stored) as User) : null;
  });

  const login = useCallback(async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 600));
    const entry = demoUsers[email.toLowerCase()];
    if (!entry || entry.password !== password) {
      return { ok: false, error: "Invalid email or password" };
    }
    setUser(entry.user);
    sessionStorage.setItem("nexus_user", JSON.stringify(entry.user));
    return { ok: true };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    sessionStorage.removeItem("nexus_user");
  }, []);

  const hasRole = useCallback(
    (...roles: Role[]) => (user ? roles.includes(user.role) : false),
    [user]
  );

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      login,
      logout,
      hasRole,
    }),
    [user, login, logout, hasRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

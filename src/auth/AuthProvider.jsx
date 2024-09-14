import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { onAuthStateChanged, signOut } from "../configs/firebaseAuth";
  import { useRouter } from "next/router";
  
  export const AuthContext = createContext({
    user: null,
    isLoading: true,
    logout: signOut,
  });
  
  export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [isLoading, setLoading] = useState(true);
  
    const logout = useCallback(() => {
      return signOut().then(() => {
        setUser(null);
        router.replace("/login");
      });
    }, [router]);
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        }
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    return (
      <AuthContext.Provider value={{ isLoading, user, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export const useAuth = () => useContext(AuthContext);
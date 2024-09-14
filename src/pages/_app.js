import { useRouter } from "next/router";
import { AuthProvider } from "../auth/AuthProvider";
import "../styles/globals.css";
import { GuestGuard } from "../auth/GuestGuard";
import { AuthGuard } from "../auth/AuthGuard";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const Guard = GUEST_ROUTER.includes(router.pathname) ? GuestGuard : AuthGuard;

  return (
    <AuthProvider>
      <Guard>
        <Component {...pageProps} />
      </Guard>
    </AuthProvider>
  );
}

const GUEST_ROUTER = ["/login", "/register"];
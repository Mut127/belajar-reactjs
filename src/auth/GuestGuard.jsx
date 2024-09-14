import { useRouter } from "next/router";
import { useAuth } from "./AuthProvider";
import { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { PageLoading } from "../components/PageLoading";

export function GuestGuard({ children }) {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    if (auth.user) {
      router.replace("/");
    }
  }, [auth.user, router]);

  if (auth.isLoading) {
    return <PageLoading />;
  }

  return children;
}
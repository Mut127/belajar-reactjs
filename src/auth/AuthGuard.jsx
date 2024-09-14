import React, { useEffect } from "react";
import { useAuth } from "./AuthProvider";
import { PageLoading } from "../components/PageLoading";
import { useRouter } from "next/router";

export function AuthGuard({ children }) {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.user && !auth.isLoading) {
      router.replace("/login");
    }
  }, [auth.isLoading, auth.user, router]);

  if (auth.user) {
    return children;
  }

  return <PageLoading />;
}
import Link from "next/link";
import { InputGroup } from "../components/InputGroup";
// import useSWRMutation from "swr/mutation";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Copyright } from "../components/Copyright";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "@/configs/firebaseAuth";
import { PageLoading } from "@/components/PageLoading";

export default function LoginPage() {
  
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  // const auth = useAuth();
  const router = useRouter();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await signInWithEmailAndPassword(form.email, form.password);
      router.replace("/");
    } catch (error){
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <Card title="Login">
          {error ? (
            <div
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
              role="alert"
            >
              <p class="font-bold">Error</p>
              <p>{error}</p>
            </div>
          ) : null}
          <form
            onSubmit={async (event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <InputGroup
              id="email"
              label="Email"
              required={true}
              type="email"
              onChange={(event) => {
                setForm({
                  ...form,
                  email: event.target.value,
                });
              }}
              value={form.email}
            />
            <InputGroup
              id="password"
              label="Password"
              required={true}
              type="password"
              value={form.password}
              onChange={(event) => {
                setForm((oldState) => {
                  return {
                    ...oldState,
                    password: event.target.value,
                  };
                });
              }}
            />
            <div className="flex items-center justify-between">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="./register"
              >
                Belum punya akun?
              </Link>
              <Button label={"Sign In"}
                type="submit"
                disabled={!(form.email && form.password) || loading}
                isLoading={loading}
              >
                Sign In
              </Button>
            </div>
          </form>
        </Card>
        <Copyright />
      </div>
    </div>
  );
}
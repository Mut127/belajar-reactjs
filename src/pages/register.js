import Link from "next/link";
import { Card } from "@/components/Card";
import { InputGroup } from "@/components/InputGroup";
import { REGISTRATION_INPUT } from "@/configs/form";
import { Button } from "@/components/Button";
import { Copyright } from "@/components/Copyright";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "@/configs/firebaseAuth";
import { PageLoading } from "@/components/PageLoading";

export default function RegisterPage() {
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const [form, setForm] = useState(() =>
    REGISTRATION_INPUT.reduce(
      (form, field) => ({ ...form, [field.id]: "" }),
      {}
    )
  );

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <Card title={"Register"}>
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
              try {
                setLoading(true);
                await createUserWithEmailAndPassword(form.email, form.password);
                router.replace("/");
              } catch (error) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
            }}
          >
            {REGISTRATION_INPUT.map((input) => (
              <InputGroup
                key={input.id}
                {...input}
                onChange={(event) => {
                  setForm((f) => ({ ...f, [input.id]: event.target.value }));
                }}
                value={form[input.id]}
              />
            ))}
            <div className="flex items-center justify-between">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="./login"
              >
                Sudah punya akun?
              </Link>
              <Button type="submit">Register</Button>
            </div>
          </form>
        </Card>
        <Copyright />
      </div>
    </div>
  );
}
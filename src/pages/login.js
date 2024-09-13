import Link from "next/link";
import { InputGroup } from "../components/InputGroup";
import { Card } from "../components/Card";
import { LOGIN_INPUT } from "../configs/form";
import { Button } from "../components/Button";
import { Copyright } from "../components/Copyright";

export default function LoginPage() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <Card title="Login">
          <form action="#">
            {LOGIN_INPUT.map((input) => (
              <InputGroup key={input.id} {...input} />
            ))}
            <div className="flex items-center justify-between">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="./register"
              >
                Belum punya akun?
              </Link>
              <Button label="Sign In" />
            </div>
          </form>
        </Card>
        <Copyright />
      </div>
    </div>
  );
}

import Link from "next/link";
import { Card } from "../components/Card";
import { InputGroup } from "../components/InputGroup";
import { REGISTRATION_INPUT } from "../configs/form";
import { Button } from "../components/Button";
import { Copyright } from "../components/Copyright";

export default function RegisterPage() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <Card title={"Register"}>
          <form action="#">
            {REGISTRATION_INPUT.map((input) => (
              <InputGroup key={input.id} {...input} />
            ))}
            <div className="flex items-center justify-between">
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="./login"
              >
                Sudah punya akun?
              </Link>
              <Button label="Register" />
            </div>
          </form>
        </Card>
        <Copyright />
      </div>
    </div>
  );
}

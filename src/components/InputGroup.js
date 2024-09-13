import { Label } from "./Label";
import { Input } from "./Input";

export function InputGroup({
  id,
  type = "text",
  label = "",
  required,
  placeholder = `Enter your ${label.toLowerCase()}`,
}) {
  return (
    <div className="mb-4">
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}

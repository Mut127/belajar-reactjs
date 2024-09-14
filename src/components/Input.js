export function Input({
  id,
  type = "text",
  placeholder,
  value = "",
  onChange,
}) {
  return (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={"false"}
    />
  );
}
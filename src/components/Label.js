export function Label({ children, htmlFor, className = "", required = false }) {
  return (
    <label
      className={`block text-gray-700 text-sm font-bold mb-2 ${className}`}
      htmlFor={htmlFor}
    >
      {children} {required && <b className="text-red-500">*</b>}
    </label>
  );
}

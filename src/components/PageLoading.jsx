import { Spinner } from "./Spinner";

export function PageLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Spinner />
    </div>
  );
}
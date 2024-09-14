import React, { useCallback, useState } from "react";
import { Button } from "../components/Button";
import { useUsers } from "../modules/user/useUsers";

export default function UserPage() {
  const [page, setPage] = useState(1);

  const users = useUsers(page);

  const onNextPage = useCallback(() => {
    setPage((page) => page + 1);
  }, []);

  return (
    <div className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Product List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Name
                </th>
                <th className="py-3 px-6 bg-gray-200 text-left text-xs font-medium text-black uppercase tracking-wider">
                  Umur
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="bg-gray-50">
                  <td className="py-4 px-6 border-b text-black border-gray-200 text-sm">
                    {user.name}
                  </td>
                  <td className="py-4 px-6 border-b  text-black border-gray-200 text-sm">
                    {user.age}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3 className="text-black">{page}</h3>
          <Button label={"next"} onClick={onNextPage} />
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";

function fetchUser(payload = {}) {
  return fetch(`/data/user.json?page=${payload.page || 1}`).then((response) =>
    response.json()
  );
}

export function useUsers(page) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUser({ page }).then((data) => {
      setUsers(data);
    });
  }, [page]);

  return users;
}
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const Users = () => {
  const { data: users, isLoading } = useSWR("posts", getAllUsers);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {users.map((user: any) => (
        <li key={user.id}>
          <Link href={`/about/team/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );


  export { Users };

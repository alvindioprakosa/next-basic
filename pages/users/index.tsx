import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UsersProps {
  dataUsers: User[];
}

export default function Users({ dataUsers }: UsersProps) {
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      <h1>User List</h1>
      {dataUsers.map((user) => (
        <div key={user.id} onClick={() => router.push(`/users/${user.id}`)}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <hr />
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers: User[] = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}

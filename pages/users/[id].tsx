import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { GetStaticPropsContext, GetStaticPaths, GetStaticProps } from "next";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

interface UserDetailProps {
  user: User;
}

export default function UserDetail({ user }: UserDetailProps) {
  if (!user) {
    return <Layout pageTitle="User Detail"><p>Loading...</p></Layout>;
  }

  return (
    <Layout pageTitle={`User Detail: ${user.name}`}>
      <div className="p-4 space-y-2">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <Link href="/users">
          <a className="text-blue-500 underline mt-4 inline-block">← Back to Users</a>
        </Link>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers: User[] = await res.json();

  const paths = dataUsers.map((user) => ({
    params: { id: `${user.id}` },
  }));

  return {
    paths,
    fallback: "blocking", // atau bisa "true"
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { id } = context.params as { id: string };

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      return { notFound: true };
    }

    const user: User = await res.json();

    return {
      props: {
        user,
      },
      revalidate: 60, // opsional: regenerasi setiap 60 detik
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

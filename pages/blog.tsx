import React from "react";
import Layout from "../components/Layout";
import styles from "../styles/Blog.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
  error?: string;
}

export default function Blog({ dataBlog, error }: BlogProps) {
  if (error) {
    return (
      <Layout pageTitle="Blog Page">
        <p>Error fetching blog posts: {error}</p>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Blog Page">
      {dataBlog.length > 0 ? (
        dataBlog.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    
    // Check if the response is successful
    if (!res.ok) {
      throw new Error("Failed to fetch blog posts");
    }

    const dataBlog: Post[] = await res.json();

    return {
      props: {
        dataBlog,
      },
    };
  } catch (error) {
    return {
      props: {
        dataBlog: [],
        error: (error as Error).message,
      },
    };
  }
}
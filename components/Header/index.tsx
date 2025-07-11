import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

export default function index() {
  return (
    <>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/users">
              <a>User</a>
            </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

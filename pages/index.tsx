import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Home: NextPage = () => {
  const paragraphText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias. Amet ea neque autem mollitia facere inventore rerum deserunt, laborum enim esse vel beatae vitae, iusto eaque sit a sunt.";

  return (
    <Layout pageTitle="Home Page">
      <Image src="/heloo.jpg" width={200} height={200} alt="Helo" />
      <p className={styles["title-homepage"]}>Heloo</p>
      {[...Array(20)].map((_, index) => (
        <p key={index}>{paragraphText}</p>
      ))}
      <Image src="/b.jpg" width={200} height={200} alt="blockchain" />
    </Layout>
  );
};

export default Home;
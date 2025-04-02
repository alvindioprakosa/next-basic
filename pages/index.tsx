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

  const renderParagraphs = () => {
    // Render the paragraph 20 times
    return Array.from({ length: 20 }, (_, index) => (
      <p key={index}>{paragraphText}</p>
    ));
  };

  return (
    <Layout pageTitle="Home Page">
      <div className={styles["home-content"]}>
        {/* Main image */}
        <Image src="/heloo.jpg" width={200} height={200} alt="Helo" />
        
        {/* Title */}
        <p className={styles["title-homepage"]}>Heloo</p>

        {/* Rendered paragraphs */}
        {renderParagraphs()}

        {/* Another image */}
        <Image src="/b.jpg" width={200} height={200} alt="Blockchain" />
      </div>
    </Layout>
  );
};

export default Home;

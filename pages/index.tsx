import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
const Home: NextPage = () => {
  const paragraphText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, alias. Amet ea neque autem mollitia facere inventore rerum deserunt, laborum enim esse vel beatae vitae, iusto eaque sit a sunt.";

  const renderParagraphs = () => {
    return Array.from({ length: 20 }, (_, index) => (
      <p key={index}>{paragraphText}</p>
    ));
  };

  return (
    <Layout pageTitle="Home Page">
      {/* Main image */}
      <Image src="/heloo.jpg" width={200} height={200} alt="Helo" />

      {/* Title */}
      <h1>Heloo</h1>

      {/* Rendered paragraphs */}
      {renderParagraphs()}

      {/* Another image */}
      <Image src="/b.jpg" width={200} height={200} alt="Blockchain" />
    </Layout>
  );
};

export default Home;

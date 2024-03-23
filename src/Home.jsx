import React from "react"
import CommonSection from "./components/CommonSection"
import About from "./About";
import ContentSection from "./components/ContentSection";
import Contact from "./Contact";

const Home = () => {
  const data = {
    name: "Bringing Joy to Your Table, Every Day!",
    image: "./images/group-tiffin.png",
    status: "true",
  };

  return (
    <>
      <CommonSection {...data} />
      <ContentSection />

      <Contact />

    </>
  );
};

export default Home

import React from "react";
import CommonSection from "./components/CommonSection";
import ContentSection from "./components/ContentSection";
import PricingSection from "./components/PricingSection";
import styled from "styled-components";

const About = () => {

  const Wrapper = styled.section`

    .sec-title .title{
      position: relative;
      display: block;
      font-size: 18px;
      line-height: 24px;
      color: #00aeef;
      font-weight: 500;
      margin-bottom: 15px;
    }
    
    .sec-title .text{
      position: relative;
      font-size: 16px;
      line-height: 26px;
      color: #848484;
      font-weight: 400;
      margin-top: 35px;
    }
    
    .sec-title.light h2{
      color: #ffffff;
    }
    
    .sec-title.text-center h2:before{
      left:50%;
      margin-left: -25px;
    }

    .about-section .text{
      margin-bottom: 20px;
      font-size: 16px;
      line-height: 26px;
      color: #848484;
      font-weight: 400;
      }
  `;

  const data = {
    name: "We are doing more than you expect",
    image: "./images/group-tiffin.png",
    status: "false", //to hide button.
  };
  return (
    <>
    <Wrapper>
      <CommonSection {...data} />
      <section className="about-section">
        <div className="container">
          <div className="sec-title">
            <span className="title">Our Future Goal</span>
            <h2>We want to lead in innovation & Technology</h2>
          </div>
          <div className="text">
            We works on UI/UX and functionality as well so that a plugins comes with proper stucture & stunning looks which
            suits to your web app & website.
          </div>
          <div className="text">
            We take a small toolkit here and ride it well so that it is fit for your use. One who performs well and looks even
            better.
          </div>
          <div className="text">
            Here we are trying to give you all kinds of technical content, whether it is related to designing or
            functionality. We are creating content on a lot of languages and will continue to make it free of cost even if you
            use it without any problem. Which is a very important thing.
          </div>
          <div className="text">
            Here you can also share the content you create, if our technical team likes it, then we will also share it on our
            blog.
          </div>
          <div className="text">

            In the end, I would say keep visiting our website and enjoy the quality content.
          </div>
        </div>
      </section>
      <PricingSection />
      <br/>
      <ContentSection />
      </Wrapper>
    </>
  );
};

export default About

import React from "react"
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const CommonSection = ({name,image,status}) => {

  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="common-section-data">
            <h1 className="common-heading">{name}</h1>
            <p className="common-para"> At OTT (On Time Tiffin), we understand the hustle of modern life. Our mission is simple: to bring joy to your table every day. With our hygienic, home-cooked meals, delivered right to you, we aim to make your lunchtime hassle-free and enjoyable. Say goodbye to meal prep stress and hello to delicious, affordable options for everyone. Experience the convenience of OTT (On Time Tiffin) and let us take care of your lunch needs, so you can focus on what matters most.</p>
            {/* Show read more button only on home page. */}
            {status === "true" && (
              <Button className="btn contact-btn common-btn">
                <a href="/about">Read More</a>
              </Button>
            )}
          </div>
            <div className="section-common-image">
              <picture>
                <img src={image} className="hero-img" alt="common" />
              </picture>
            </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .common-section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 26rem;
  }

  .common-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  /* Style the rainbow text element. */
  .common-heading {
    font-weight: 800;
    font-size: 6.4rem;
    text-transform: uppercase;
    background: #CA4246;
    background-color: #CA4246;
    background: conic-gradient(
      #CA4246 16.666%, 
      #E16541 16.666%, 
      #E16541 33.333%, 
      #F18F43 33.333%, 
      #F18F43 50%, 
      #8B9862 50%, 
      #8B9862 66.666%, 
      #476098 66.666%, 
      #476098 83.333%, 
      #A7489B 83.333%);
    
    /* Set the background-size and repeat properties. */
    background-size: 57%;
    background-repeat: repeat;
    
    /* Use the text as a mask for the background. */
    /* This will show the gradient as a text colour rather than element bg. */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    
    /* Animate the text when loading the element. */
    /* This animates it on page load and when hovering out. */
    animation: common-heading-animation-rev 0.5s ease forwards;
    cursor: default;
  }
  
  /* Add animation on hover. */
  .common-heading:hover {
    animation: common-heading-animation 0.5s ease forwards;
  }
  
  @keyframes common-heading-animation {
    0% {
      background-size: 57%;
      background-position: 0 0;
    }
    20% {
      background-size: 57%;
      background-position: 0 1em;
    }
    100% {
      background-size: 300%;
      background-position: -9em 1em;
    }
  }
  
  /* Move the background and make it smaller. */
  /* Animation shown when entering the page and after the hover animation. */
  @keyframes common-heading-animation-rev {
    0% {
      background-size: 300%;
      background-position: -9em 1em;
    }
    20% {
      background-size: 57%;
      background-position: 0 1em;
    }
    100% {
      background-size: 57%;
      background-position: 0 0;
    }
  }


  .common-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-common-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
  
`;

export default CommonSection

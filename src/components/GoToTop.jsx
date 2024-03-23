import React, { useState, useEffect } from "react"
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [show, setShow] = useState(false);
  const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .top-btn {
      font-size: 2.4rem;
      width: 6rem;
      height: 6rem;
      color: #fff;
      background-color: ${({ theme }) => theme.colors.btn};
      box-shadow: ${({ theme }) => theme.colors.shadow};
      border-radius: 50%;
      position: fixed;
      bottom: 0.2rem;
      right: 5rem;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &--icon {
        animation: gototop 1.2s linear infinite alternate-reverse;
      }

      @keyframes gototop {
        0% {
          transform: translateY(-0.5rem);
        }
        100% {
          transform: translateY(1rem);
        }
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .top-btn {
        right: 0;
        left: 40%;
      }
    }
  `;

  const goto = () => {
    window.scrollTo({top: 0, left:0, behavior:'smooth'});
  
  };
  
  const listenScroll = () => {
    let heightToHidden = 450;
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (scroll > heightToHidden) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScroll);
    return () => window.removeEventListener('scroll', listenScroll);
  },[]);

  return (
    <Wrapper>
      {show && (
        <div className="top-btn" onClick={goto}>
          <FaArrowUp className="top-btn--icon"/> 
        </div>
      )}
    </Wrapper>
  );
};

export default GoToTop;

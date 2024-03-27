import React from "react"
import styled from "styled-components";

const ContentSection = () => {

  return (
    <>
      <Wrapper>
        <div className="container grid grid-two-column">
          <div className="content-section-data">
            <div className="sec-title">
              <h2>Why OTT </h2>
            </div>
              <br/>
              <div className="content-list">
                <ul>
                  <li>
                    <span className="number-list">01</span>
                    <div className="content-wrapper">
                      <h3>Hygienic Preparation</h3>
                      <p className="description">Ensuring the highest standards of cleanliness and safety in food handling and preparation.</p>
                    </div>
                  </li>
                  <li>
                    <span className="number-list">02</span>
                    <div className="content-wrapper">
                      <h3>Convenient Delivery</h3>
                      <p className="description">Timely delivery to schools and offices during lunch hours, eliminating the need for meal prep or pickup.</p>
                    </div>
                  </li>
                  <li>
                    <span className="number-list">03</span>
                    <div className="content-wrapper">
                      <h3>Affordable Pricing</h3>
                      <p className="description">Offering budget-friendly meal options without compromising on quality or taste.</p>
                    </div>
                  </li>
                  {/* <li>
                    <span className="number-list">04</span>
                    <div className="content-wrapper">
                      <h3>Own fast delivery</h3>
                      <p className="description">A description of fast delivery.</p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="section-content-image">
              <picture>
                <img src="./images/tiffin.png" className="hero-img" alt="common" />
              </picture>
            </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`

  .content-section-data {
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

  .content-list {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-content-image {
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

  .number-list {
    font-family: Monoton;
    font-size: 50px;
    line-height: 50px;
    color: ${({ theme }) => theme.colors.btn};
    margin-right: 20px;
  }
  
  .content-list {
    margin-top: 2rem;
    padding: 1rem;
    display: flex;
  }
  
  .content-list ul {
    list-style: none;
    padding: 0;
    margin: 0;
    flex: 1;
  }
  
  .content-list li {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
  }
  
  .content-list .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .content-list h3 {
    line-height: 120%;
    font-size: 22px;
    letter-spacing: -1px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #5b5858;
  }
  
  .content-list h3:hover {
    color: ${({ theme }) => theme.colors.black};
  }
  
  .content-list .description {
    color: #6F6F87;
    margin: 0;
    font-size: 14px;
  }
  
  /* Add spacing between numbers */
  .content-list li:not(:last-child) {
    margin-right: 50px;
  }
  

  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
  
`;

export default ContentSection

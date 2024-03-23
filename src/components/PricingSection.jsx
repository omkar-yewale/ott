import React from "react";
import styled from "styled-components";

const PricingSection = () => {
  const Wrapper = styled.section`
  
  .main {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .cards_item {
    display: flex;
    padding: 10px;
    align-items: center;
  }
  
  .card_image {
    max-height: 250px;
    position: relative;
  }
  
  .card_image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
  }
  
  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }
  
  @media (min-width: 56rem) {
    .cards_item {
      width: 32%;
    }
    .cards_item.second {
      width: 36%;
    }
  }
  
  .card {
    background-color: #ffffffb3;
    border-radius: 0.25rem;
    box-shadow: 0 0.1rem 3rem #00000019;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 20px 1rem 10px;
    border-radius: 16px;
    height: fit-content;
  }
  
  .card_content {
    padding: 0.1rem 0;
  }
  
  .price {
    position: absolute;
    bottom: 10px;
    right: -3px;
    border-top-left-radius: 500rem;
    border-bottom-left-radius: 500rem;
    padding-right: 25px;
    padding-left: 35px;
    padding-top: 2px;
    padding-bottom: 2px;
    font-weight: 700;
    font-size: 22px;
    color: #fff;
    background: #f53362;
  }
  
  .blur {
    color: transparent;
    text-shadow: 0 0 8px #000;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .card_title {
    margin-top: 0;
    margin-bottom: 15px;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    background: linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #978808);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  
  .card_text {
    margin-top: 16px;
    font-size: 17px;
  }
  .card_text .meal-heading {
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    text-decoration: underline;
  }

  .card_text .meal-type {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 3rem;
    text-align: center;
    color: ${({ theme }) => theme.colors.btn};
  }

  .card_text p {
    text-align: center;
  }

`;

  return (
    <>
      <Wrapper>
        <div className="main">
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <h2 className="card_title">College</h2>
                <div className="card_image">
                  <img src="./images/group-tiffin.png" alt="College Tiffin" />
                  <div className="price">₹ <span className="blur"> ?? </span></div>
                </div>
                <div className="card_content">
                  <div className="card_text">
                    <p> Comming soon for college tiffin service. Stay tuned!</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="cards_item second">
              <div className="card">
                <h2 className="card_title">School</h2>
                <div className="card_image">
                  <img src="./images/group-tiffin.png" alt="Schoool Tiffin" />
                  <div className="price"><strike>₹79/-</strike> <br/>₹49/- only</div>
                </div>
                <div className="card_content">
                  <div className="card_text">
                    <h3 className="meal-type"> Standard Menu </h3>
                    <br/>
                    <h3 className="meal-heading"> Meal Includes </h3>
                    <p><i> 1 Veg Dish </i></p>
                    <p><i>3 Chapati </i></p>
                    <p><i> Rice </i> </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <h2 className="card_title">Corporate</h2>
                <div className="card_image">
                  <img src="./images/group-tiffin.png" alt="Corporate Tiffin" />
                  <div className="price">₹ <span className="blur"> ?? </span></div>
                </div>
                <div className="card_content">
                  <div className="card_text">
                    <p> Comming soon for corporate tiffin service. Stay tuned!</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <br/>
      </Wrapper>
    </>
  );
};

export default PricingSection

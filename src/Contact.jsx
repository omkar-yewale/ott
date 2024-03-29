import React from "react"
import styled from "styled-components";
import { FaMapLocationDot, FaMobileRetro, FaRegMessage  } from "react-icons/fa6";
import { Button } from "./styles/Button";

const Contact = () => {
  const Wrapper = styled.section`
    .contact-container {
      max-width: 120rem;
      margin: 0 auto;
    }

    section {
      position: relative;
      z-index: 3;
      padding-top: 25px;
      padding-bottom: 50px;
    }
    
    .container {
      max-width: 1080px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 20px;
      padding-right: 20px;
    }
    
    .section-header {
      margin-bottom: 50px;
      text-align: center;
    }
    
    .section-header h2 {
      color: black;
      font-weight: bold;
      font-size: 3em;
      margin-bottom: 20px;
    }

    .input-box .input{
      background-color: white;
      color: black;
    }

    .social-icons {
      display: flex;
    
      div {
        padding: 2rem;
      }
    
      .icons {
        color: ${({ theme }) => theme.colors.black};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
        align-items: center;
      }

      .contact-btn::after {
        position: absolute;
        content: "Send";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: rgb(98 84 243);
        transition: all .35s;
      }
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      padding: 9rem 1.5rem 5rem 1.5rem;
    }

  `;
  return (
    <>
      <Wrapper>
        <div className="contact-container">
          <div className="sec-title">
            <h2>Get in touch</h2>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42665.40969182896!2d73.03846452929251!3d19.058238143160025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21a53e30b83%3A0xa766b29f687709d7!2sKharghar%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709184424165!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0, padding: 20 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          <section>
            <div className="section-header">
              <div className="container">
                <p> Feel Free to contact us any time. We will get back to you as soon as. </p>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="contact-info">
                  <div className="social-icons">
                    <div className="icons">
                      <FaMapLocationDot />
                    </div>

                    <div className="contact-info-content">
                      <h4>Address</h4>
                      <p>Kharghar, Sector - 12<br /> Navi Mumbai, India, <br />410210</p>
                    </div>
                  </div>

                  <div className="social-icons">
                    <div className="icons">
                      <FaMobileRetro />
                    </div>

                    <div className="contact-info-content">
                      <h4>Phone</h4>
                      <p>+91 7620747379</p>
                    </div>
                  </div>

                  <div className="social-icons">
                    <div className="icons">
                      <FaRegMessage />
                    </div>

                    <div className="contact-info-content">
                      <h4>Email</h4>
                      <p>yewaleomkar@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact-form">
                  <form action="https://formspree.io/f/mgegyplv" method="POST">
                    <h2>Send Message</h2>
                    <div className="input-box">
                      <input type="text" className="input" name="name" autoComplete="off" required/>
                      <span>Name</span>
                    </div>

                    <div className="input-box">
                      <input type="email" className="input" name="Email" autoComplete="off" required/>
                      <span>Email</span>
                    </div>

                    <div className="input-box">
                    <input type="tel" className="input" name="telphone"  pattern="[0-9]{10}" title="Ten digits number" required/>  
                      <span>Phone</span>
                    </div>

                    <div className="input-box">
                      <textarea name="message" className="input" cols= "30" rows="6" autoComplete="off" required></textarea>
                      <span>Type your Message...</span>
                    </div>

                    <div>
                      <Button className="btn contact-btn common-btn" type="submit">
                        <a>Send</a>
                      </Button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
            </section>
          </div>
      </Wrapper>
    </>
  );
};

export default Contact

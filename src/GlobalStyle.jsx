import { createGlobalStyle } from'styled-components';

export const GlobalStyle = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

html {
  font-size: 62.5%;
  overflow-x: hidden;
}

.pages {
  background-color: ${({ theme }) => theme.colors.white};
}

.common-btn {
  background-color: ${({ theme }) => theme.colors.white};
}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}


h3 {
  font-size: 1.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
}

.policy {
  color: ${({ theme }) => theme.colors.black};
}

p {
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  font-size: 1.6rem;
  line-height: 1.5;
  margin-top: 1rem;
  font-weight: 400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container {
  max-width: 120rem;
  margin: 0 auto;
}
.grid {
  display: grid;
  gap: 2rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column {
  grid-template-columns: 1fr 1.2fr .5fr .8fr;
}


.row  {
  display: flex;
  flwx-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.contact-info {
  width: 50%;
}



.contact-info-content {
  margin-left: 20px;
}

.contact-info-content h4 {
  color: #1da9c0;
  font-size: 1.4em;
  margin-bottom: 5px;
}

.contact-info-content p {
  
  font-size: 1em;
}

.contact-form {

  padding: 40px;
  width: 45%;
  padding-bottom: 20px;
  padding-top: 20px;
}

.contact-form h2 {
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 10px;
  color: #333;
}

.contact-form .input-box {
  position: relative;
  width: 100%;
  margin-top: 10px;
}

.contact-form .input-box input,
.contact-form .input-box textarea{
  width: 100%;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  border: none;
  border-bottom: 2px solid #333;
  outline: none;
  resize: none;
}

.contact-form .input-box span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 16px;
  margin: 10px 0;
  pointer-events: none;
  transition: 0.5s;
  color: #666;
}

.contact-form .input-box input:focus ~ span,
.contact-form .input-box textarea:focus ~ span{
  color: #e91e63;
  font-size: 12px;
  transform: translateY(-20px);
}

.contact-form .input-box input:not([placeholder=""]),
.contact-form .input-box textarea:not([placeholder=""]) ~ span {
  /* Hide the placeholder when the input has a value */
  transform: translateY(20px); /* Match focused transform for consistency */
}

.content-heading {
  font-weight: 800;
  font-size: 5rem;
  text-transform: uppercase;
  cursor: default;
}

.sec-title{
  position:relative;
  z-index: 1;
}

.sec-title h2 {
  position: relative;
  display: block;
  font-size:40px;
  line-height: 1.28em;
  color: #222222;
  font-weight: 600;
  padding-bottom:18px;
  text-transform: uppercase;
}

.sec-title h2:before {
  content: "";
  width: 7px;
  display: inline-block;
  position: absolute;
  bottom: 12px;
  top: 0;
  left: -8px;
  background: #F5C332;
  border-color: #F5C332;
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .container {
    padding: 0 3.2rem;
  }

  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }

}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  html {
    font-size: 50%;
  }

  .grid {
    gap: 3.2rem;
  }

  .grid-two-column, grid-three-column, grid-four-column {
    grid-template-columns: 1fr;
  }

  .row {
    flex-direction: column;
  }
  
  .contact-info {
    margin-bottom: 40px;
    width: 100%;
  }
  
  .contact-form {
    width: 100%;
  }
}

`;
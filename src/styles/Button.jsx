import styled from'styled-components';

export const Button = styled.button`

  display: block;
  padding: 0px;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: sans-serif;
  text-decoration: none;
  text-transform: uppercase;
  color: #333;
  border: 2px solid #333;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
  
  &:after{
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #efcc63;
    transition: all .35s;
  }

  &:hover{
    color: rgb(255 255 255);
  }

  &:hover:after{
    width: 100%;
  }

  a {
    color: black;
    position: relative;
    z-index: 2;
  }
`;
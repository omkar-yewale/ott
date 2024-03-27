import React from "react";
import "../styles/Footer.css";
import { FaRegCopyright, FaMessage, FaWhatsapp } from "react-icons/fa6";
import PrivacyModal from "../Modal/PrivacyModal";

const Footer = () => {
    return (
    <>
    <footer className="footer-distributed">
    <div className="footer-right">
        <div className="footer-icons">
            <a href="mailto:someone@example.com" alt="mail" target="_blank"> <FaMessage className="icons"/></a>
        </div>
        <div className="footer-icons">
            <a href="https://api.whatsapp.com/send?phone=7620747379" alt="whatsapp" target="_blank"> <FaWhatsapp className="icons"/></a>
        </div>
    </div>

    <div className="footer-left">
        <p className="footer-links">
            OTT (On Time Tiffin) is: Healthy, Hygenic and Homemade.
        </p>
        <p className="footer-links">
        <PrivacyModal />
        </p>
        <p><FaRegCopyright /> {new Date().getFullYear()} All Rights Reserved. </p>
        <p>Designed & Developed by <a href="https://www.linkedin.com/in/omkar-yewale-77a88ba2/" target="blank">Omkar Yewale.</a></p>
    </div>
    </footer>
    </>
    );
};

export default Footer;
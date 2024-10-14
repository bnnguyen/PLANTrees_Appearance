import React from "react";
import "./Footer.css";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import youtube from "../images/youtube.svg";
import xtwitter from "../images/x-twitter.svg";
import instagram from "../images/instagram.svg";
import phone from "../images/phone-solid.svg";
import email from "../images/envelope-solid.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--phone">
        <img className="footer--contacts--icon" src={phone}></img>
        <div className="footer--phone--number" style={{color: "rgb(0, 90, 0)"}}>0918249xxx</div>
      </div>
      <div className="footer--email">
        <img className="footer--contacts--icon" src={email}></img>
        <div className="footer--email--address" style={{color: "rgb(0, 90, 0)"}}>xxxplantreesxxx@gmail.com</div>
      </div>
      <div className="footer--contacts">
        <div className="footer--contacts--invite">Follow us: </div>
        <div className="footer--contacts--icons">
          <img className="footer--contacts--icon" src={facebook}></img>
          <img className="footer--contacts--icon" src={linkedin}></img>
          <img className="footer--contacts--icon" src={youtube}></img>
          <img className="footer--contacts--icon" src={xtwitter}></img>
          <img className="footer--contacts--icon" src={instagram}></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

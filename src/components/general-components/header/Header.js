import React from "react";
import "./Header.css";
import logo from "../images/coolLogo-removebg-preview.png";
import { useNavigate } from "react-router";

const Header = () => {
  const pathname = window.location.pathname;

  const navigate = useNavigate();

  const NavigateClick = (option) => {
    if (option === 0) {
      navigate("/");
    } else if (option === 1) {
      navigate("/");
    } else if (option === 2) {
      navigate("/area");
    } else if (option === 3) {
      navigate("/myspace");
    } else if (option === 4) {
      navigate("/contact");
    }
    // console.log(option);
  };

  return (
    <>
      <header className="header">
        <nav className="header--navbar">
          <div
            className="header--logo"
            onClick={() => {
              NavigateClick(0);
            }}
          >
            <img src={logo} alt="" />
          </div>
          <div className="header--options">
            <div
              className="header--option"
              onClick={() => {
                NavigateClick(1);
              }}
            >
              {pathname === "/" ? (
                <div className="header--option_chosen">HOME</div>
              ) : (
                <div>HOME</div>
              )}
            </div>
            <div
              className="header--option"
              onClick={() => {
                NavigateClick(2);
              }}
            >
              {pathname === "/area" ? (
                <div className="header--option_chosen">AREA SUGGESTIONS</div>
              ) : (
                <div>AREA SUGGESTIONS</div>
              )}
            </div>
            <div
              className="header--option"
              onClick={() => {
                NavigateClick(3);
              }}
            >
              {pathname === "/myspace" ? (
                <div className="header--option_chosen">MY TREE SPACE</div>
              ) : (
                <div>MY TREE SPACE</div>
              )}
            </div>
            <div
              className="header--option"
              onClick={() => {
                NavigateClick(4);
              }}
            >
              {pathname === "/contact" ? (
                <div className="header--option_chosen">CONTACT</div>
              ) : (
                <div>CONTACT</div>
              )}
            </div>
            {/* <div className="header--option">TREE LIBRARY</div>
            <div className="header--option">MY TREE LIBRARY</div> */}
          </div>
        </nav>
      </header>
      <div className="header--dummy"></div>
    </>
  );
};

export default Header;

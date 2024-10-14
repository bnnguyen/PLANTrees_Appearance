import "./Homepage.css";
import React, { useState } from "react";
import hero from "../general-components/images/irene-davila-O1PHdGGcljQ-unsplash.jpg";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();

  const GetStartedClicked = () => {
    navigate("/area");
  };

  const NavigateTo = (id) => {
    if (id == 1) {
      navigate("/area");
    } else if (id == 2) {
      navigate("/myspace");
    } else if (id == 3) {
      navigate("/contact");
    }
  };

  return (
    <div className="homepage">
      <div className="homepage--hero">
        <div className="homepage--hero--dark"></div>
        <img src={hero} alt="" />
        <div className="homepage--slogan bold">
          <div>
            FIND THE <span className="light-green">PERFECT</span> PLACE TO{" "}
            <span className="light-green">PLANT</span> YOUR{" "}
            <span className="gold">HAPPINESS</span>,
          </div>
          <div className="homepage--slogan--bigger">ONE SEED AT A TIME</div>
        </div>
      </div>

      <div className="homepage--who_we_are">
        <div className="homepage--who_we_are--org_name bold">
          <span style={{ color: "green" }}>PLANT</span>rees
        </div>
        <div className="homepage--who_we_are--description">
          Trees are essential for a healthy planet, but we are losing them at an
          alarming rate. We are here to help you plant more trees in your
          community by providing nearest suitable areas to plant trees from your
          selected location. It can also suggest specific tree types based on
          the soil and weather conditions in your area!
        </div>
        <div className="homepage--who_we_are--why bold">
          <span style={{ color: "green" }}>WHY</span>, YOU ASK?
        </div>
        <div className="homepage--who_we_are--why_answer">
          Because we would love to accompany you on the journey to make our
          planet more <span style={{ color: "green" }}>green!</span>{" "}
          <div style={{ margin: "15px auto", maxWidth: "1050px" }}>
            Our mission is to create a greener, healthier planet by making it
            easy for people to plant trees.
          </div>
        </div>
      </div>

      <div className="homepage--what_to_do">
        <div className="homepage--what_to_do--heading bold">
          <span
            style={{
              backgroundColor: "lightgreen",
              padding: "5px 10px",
              borderRadius: "8px",
            }}
          >
            WHAT YOU CAN DO
          </span>
        </div>
        <div className="homepage--what_to_do--options">
          {/* <div className="homepage--what_to_do--option">
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              TREE LIBRARY
            </div>
            <div className="homepage--what_to_do--option_desc">
              Where you can see information about trees, share health records of
              trees you know, and see other users' posts and inputs.
            </div>
          </div>
          <div className="homepage--what_to_do--option">
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              MY TREE LIBRARY
            </div>
            <div className="homepage--what_to_do--option_desc">
              See your past posts and tree health inputs.
            </div>
          </div> */}
          <div
            className="homepage--what_to_do--option"
            onClick={(e) => {
              NavigateTo(1);
            }}
          >
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              AREA SUGGESTIONS
            </div>
            <div className="homepage--what_to_do--option_desc">
              See potential areas for planting near you through a sattelite map
              view.
            </div>
          </div>
          <div
            className="homepage--what_to_do--option"
            onClick={(e) => {
              NavigateTo(2);
            }}
          >
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">
              MY TREE SPACE
            </div>
            <div className="homepage--what_to_do--option_desc">
              Upload a photo and see potential spots for planting, as well as
              tree and plant type suggestions.
            </div>
          </div>
          <div
            className="homepage--what_to_do--option"
            onClick={(e) => {
              NavigateTo(3);
            }}
          >
            <div className="homepage--what_to_do--dark"></div>
            <div className="homepage--what_to_do--option_text">CONTACT</div>
            <div className="homepage--what_to_do--option_desc">
              Contact us for more information!
            </div>
          </div>
        </div>
        <div className="homepage--what_to_do--get_started">
          <button onClick={GetStartedClicked}>GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

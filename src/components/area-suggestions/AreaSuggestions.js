import React, { useState } from "react";
import "./AreaSuggestions.css";
import locationDot from "../general-components/images/locationDot.png";
import PotentialSpot from "./PotentialSpot";
import sendIcon from "./img/end icon.svg";
import { Trees } from "../Trees";

const AreaSuggestions = () => {
  const [location, setLocation] = useState("");
  const [imgShow, setImgShow] = useState("");
  const [foundMatch, setFoundMatch] = useState(false);
  const [t_ids, setT_ids] = useState([]);

  const locations = [
    {
      location: "Đa Kao, Quận 1, Thành phố Hồ Chí Minh, Việt Nam",
      img: (
        <img
          className="area-suggestions--snapshot"
          src={require("./img/hinh12_v2.png")}
        />
      ),
      tt: [2, 3],
      id: 0,
    },
    {
      location:
        "Đường Trần Nhân Tôn/403 Hẻm 57, Khu phố 1, Quận 5, Thành phố Hồ Chí Minh, Việt Nam",
      img: (
        <img
          className="area-suggestions--snapshot"
          src={require("./img/hinh22_v2.png")}
        />
      ),
      tt: [1, 4, 5],
      id: 1,
    },
    {
      location: "Phường 6, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam",
      img: (
        <img
          className="area-suggestions--snapshot"
          src={require("./img/hinh32_v2.png")}
        />
      ),
      tt: [0, 1, 2],
      id: 2,
    },
    {
      location: "Phường 12, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam",
      img: (
        <img
          className="area-suggestions--snapshot"
          src={require("./img/hinh42_v2.png")}
        />
      ),
      tt: [3, 4, 5, 6],
      id: 3,
    },
    {
      location:
        "Celadon City, Sơn Kỳ, Tân Phú, Thành phố Hồ Chí Minh, Việt Nam",
      img: (
        <img
          className="area-suggestions--snapshot"
          src={require("./img/hinh52_v2.png")}
        />
      ),
      tt: [0, 3, 6],
      id: 4,
    },
  ];

  const HandleSearchLocation = () => {
    // console.log(location);
    locations.map((locationObj) => {
      console.log(locationObj.location === location);
      if (locationObj.location === location) {
        setFoundMatch(true);
        setImgShow(locationObj.img);
        setT_ids(locationObj.tt);
        // console.log(imgShow);
        return;
      }
    });
  };

  return (
    <div className="area-suggestions">
      <div className="area-suggestions--left">
        <div className="area-suggestions--location">
          <img src={locationDot} alt="you are at" />
          <input
            onChange={(e) => {
              setLocation(e.target.value);
              locations.map((locationObj) => {
                console.log(locationObj.location === location);
                if (locationObj.location === location) {
                  setFoundMatch(true);
                  setImgShow(locationObj.img);
                  setT_ids(locationObj.tt);
                  // console.log(imgShow);
                  return;
                }
                setFoundMatch(false);
              });
            }}
            placeholder="Your location..."
            // defaultValue={"Khu đô thị Celadon City"}
          />
          <img
            src={sendIcon}
            alt="send"
            style={{ rotate: "-5deg", cursor: "pointer" }}
            onClick={HandleSearchLocation}
          />
        </div>
        <div className="area-suggestions--info">
          <div className="area-suggestions--info_heading">
            TREE TYPE SUGGESTIONS
          </div>
          {foundMatch ? (
            <div className="area-suggestions--info_text">
              {Trees.map((tree) => {
                if (t_ids.includes(tree.id)) {
                  return (
                    <PotentialSpot
                      treeName={tree.name}
                      treeDescription={tree.description}
                    />
                  );
                }
              })}
            </div>
          ) : (
            "No tree type suggestions yet."
          )}
        </div>
      </div>
      <div className="area-suggestions--map">
        {location && foundMatch ? (
          imgShow
        ) : (
          <>
            {foundMatch ? null : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                Please type in a location
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AreaSuggestions;

import React from "react";
import "./AreaSuggestions.css";
import greenPlant from "../general-components/images/plant-green.svg";

const PotentialSpot = ({ id, treeName, treeDescription }) => {
  return (
    <div className="area-suggestions--info_item">
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img src={greenPlant} alt="" />
        <div className="area-suggestions--info_item_heading">{treeName}</div>
      </div>
      <div className="area-suggestions--info_item_description">
        {treeDescription}
        {/* <div className="are-suggestions--info_treeTypes_suggestions">
          <span className="area-suggestions--info_treeTypes"></span>
        </div> */}
      </div>
    </div>
  );
};

export default PotentialSpot;

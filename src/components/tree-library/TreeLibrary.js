import React from "react";
import "./TreeLibrary.css";

const TreeLibrary = () => {
  return (
    <div className="tree-library">
      <div className="tree-library--tree_health_record">
        <div className="tree-library--share_record">
          <div className="tree-library--share_record_label">
            SHARE YOUR TREE HEALTH RECORD
          </div>
          <div className="tree-library--write_record">
            <div className="tree-library--write_record--title">
              <div className="tree-library--write_record--icon"></div>
              {/* <div className="tree-library--write_record--label"></div> */}
              <input
                className="tree-library--write_record--input"
                placeholder="Title..."
              />
            </div>
            <div className="tree-library--write_record--location">
              <div className="tree-library--write_record--icon"></div>
              <div className="tree-library--write_record--label"></div>
              <input
                className="tree-library--write_record--input"
                placeholder="Location..."
              />
            </div>
            <div className="tree-library--write_record--description">
              <div className="tree-library--write_record--icon"></div>
              <div className="tree-library--write_record--label"></div>
              <input
                className="tree-library--write_record--input"
                placeholder="Description..."
              />
            </div>
            <div className="tree-library--write_record--status">
              <div className="tree-library--write_record--icon"></div>
              <div className="tree-library--write_record--label"></div>
              <input
                className="tree-library--write_record--input"
                placeholder="Tree Status..."
              />
            </div>
          </div>
        </div>
        <div className="tree-library--tree_health_record--buttons">
          <button className="tree-library--ill_trees_button">ILL TREES</button>
          <button className="tree-library--healthy_trees_button">HEALTHY TREES</button>
        </div>
      </div>
      <div className="tree-library--community_posts">
        <div className="tree-library--community_posts--text">
          POSTS FROM THE COMMUNITY
        </div>
        <div className="tree-library--share_post">
          <div className="tree-library--share_post_label">Write a Post!</div>
          <div className="tree-library--write_post">
            <div className="tree-library--write_post--title"></div>
            <div className="tree-library--write_post--location"></div>
            <div className="tree-library--write_post--description"></div>
            <div className="tree-library--write_post--status"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreeLibrary;

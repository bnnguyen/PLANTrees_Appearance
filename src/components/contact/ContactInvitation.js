import React from "react";
import "./ContactInvitation.css";

const ContactInvitation = () => {
  return (
    <div className="contactInvitation">
      <div className="contactInvitation--content_container">
        <div className="contactInvitation--headline">
          TOGETHER, WE CAN MAKE THE WORLD GREENER
        </div>
        <div className="contactInvitation--text">
          We always treasure your joining to make the world a greener and better
          place. If you have any questions or would like to reach out to us for
          any reason, feel free to contact PLANTrees via the means below
        </div>
        <div className="contactInvitation--buttons">
          <button className="contactInvitation--btn1">xxxplantreesxxx@gmail.com</button>
          <button className="contactInvitation--btn2">(+84) xxx xxx xxx</button>
        </div>
      </div>
    </div>
  );
};

export default ContactInvitation;

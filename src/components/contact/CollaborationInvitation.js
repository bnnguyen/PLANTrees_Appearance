import React, { useEffect } from "react";
import "./CollaborationInvitation.css";
import sendIcon from "./img/end icon.svg";
import { useState } from "react";
// import { colRefMessages, colRefMessageCount } from "../../firebase";
// import { getDoc, setDoc, doc, updateDoc } from "firebase/firestore";
// import Notification from "../common-components/Notification";

const CollaborationInvitation = () => {
  // const [colabName, setColabName] = useState("");
  // const [colabEmail, setColabEmail] = useState("");
  // const [colabMessage, setColabMessage] = useState("");
  // const [messageCount, setmessageCount] = useState(0);

  // const [message, setMessage] = useState("");
  // const [messageShowing, setMessageShowing] = useState(false);
  // const [notifType, setNotifType] = useState("Thông báo");

  // useEffect(() => {
  //   const getmessageCount = async () => {
  //     const count = await getDoc(doc(colRefMessageCount, "messageCount"));
  //     setmessageCount(count.data().value);
  //   };
  //   getmessageCount();
  // });

  // const HandleMessageExit = () => {
  //   // var millisecondsToWait = 2000;
  //   // setTimeout(() => {
  //   //   window.location.reload();
  //   // }, millisecondsToWait);
  //   setMessageShowing(!messageShowing);
  // };

  // const Notify = (nType, nMessage) => {
  //   //notification type, notification message
  //   setNotifType(nType);
  //   setMessage(nMessage);
  //   if (nMessage != "") HandleMessageExit();
  // };

  // const handleColabFormSubmit = async (e) => {
  //   e.preventDefault();
  //   const d = new Date();
  //   await setDoc(
  //     doc(
  //       colRefMessages,
  //       `${messageCount + 1} | ${colabEmail} | ${colabName} | ${d}`
  //     ),
  //     {
  //       email: colabEmail,
  //       name: colabName,
  //       message: colabMessage,
  //     }
  //   );
  //   await updateDoc(doc(colRefMessageCount, "messageCount"), {
  //     value: messageCount + 1,
  //   });
  //   Notify(
  //     "Thông báo",
  //     "Bạn đã gửi biểu mẫu thành công! Xin cảm ơn bạn vì đã liên hệ với Green Env."
  //   );
  // };

  return (
    <>
      {/* {messageShowing ? (
        <Notification
          notifType={notifType}
          message={message}
          HandleMessageExit={HandleMessageExit}
        />
      ) : null} */}
      <div className="collaborationInvitation">
        <div className="ci--text">
          <div className="ci--headline">Want to collaborate with us?</div>
          <div className="ci--instructions">
            <div className="ci--instruction1">
              Use this form to contact and share with us your opinions. We will
              contact you as soon as we can.
            </div>
          </div>
        </div>
        <form
          className="ci--form"
        >
          <div className="ci--personal_info">
            <input
              type="text"
              className="ci--form_name"
              placeholder="Name"
              required="true"
            />
            <input
              type="email"
              className="ci--form_email"
              placeholder="Email"
              required="true"
            />
          </div>
          <input
            type="text"
            className="ci--form_details"
            placeholder="Details"
            required="true"
          />
          <div className="ci--btn_container">
            <button className="ci--send">
              Send
              <img src={sendIcon} alt="" className="ci--send_icon" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CollaborationInvitation;

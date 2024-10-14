import React from 'react';
import ContactInvitation from "./ContactInvitation";
import CommonQuestions from "./CommonQuestions";
import CollaborationInvitation from "./CollaborationInvitation";

const style = {
    display: "flex",
    flexDirection: "column",
    gap: "144px",
    padding: "144px 0"
}

const Contact = () => {
  return (
    <main className='contactScreen' style={style}>
      <ContactInvitation />
      <CommonQuestions />
      <CollaborationInvitation />
    </main>
  );
};

export default Contact;
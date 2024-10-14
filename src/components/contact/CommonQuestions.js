import React from "react";
import "./CommonQuestions.css";
import Question from "./Question";

const CommonQuestions = () => {
  return (
    <div className="commonQuestions">
      <div className="cq--headline">
        Here are the things you would like to know before contacting us
      </div>
      <div className="cq--questions_container">
        <Question
          question={"What is PLANTrees' mission?"}
          answer={
            "PLANTree is dedicated to inspire people to plant more trees and help improve our environment."
          }
        />
        <Question
          question={"What does PLANTrees do?"}
          answer={
            "PLANTrees helps suggest potential tree planting spots for users based on their inputs (Geolocation and phone snapshot)"
          }
        />
        <Question
          question={"What does PLANTrees stand for"}
          answer={
            "PLANTrees is a combination of 'Plan' and 'Plant trees'"
          }
        />
        <Question
          question={
            "How do we collaborate with PLANTrees?"
          }
          answer={
            "You can contact us via the email and phone number!"
          }
        />
        <Question
          question={"How can you use our services?"}
          answer={`You just need to sign up for an account, and voila! You can use our website functions.`}
        />
      </div>
    </div>
  );
};

export default CommonQuestions;

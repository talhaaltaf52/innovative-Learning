import React from "react";
import FeedbackView from "../../../Components/Feedback/FeedbackTable/FeedbackView/FeedbackView";
import MainNavbar from "../../../Components/MainNavbar/MainNavbar";
import "./feedbackviewpage.css";

const FeedbackViewPage = () => {
  return (
    <>
      <MainNavbar />
      <div className="container-fluid feedback_view_page_div">
        <div className="container">
          <FeedbackView />
        </div>
      </div>
    </>
  );
};

export default FeedbackViewPage;

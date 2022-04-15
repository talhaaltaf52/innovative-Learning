import React from "react";
import { Input } from "antd";
import "./feedbackview.css";
import { useLocation } from "react-router-dom";
import { Textarea } from "@chakra-ui/react";
import FeedbackProfilePic from "../../../../Assets/feedback.webp";

const FeedbackView = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="container-fluid">
        <div className="container feed_pro_heading">
          <h2>Feedback</h2>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 feed_left_side">
              <div className="text-center feed_pro_text">
                <img
                  src={FeedbackProfilePic}
                  alt="pro_pic"
                  className="feed_profile_pic mt-4"
                />
                <p className="feed_pro_username">{state[1]}</p>
                <p className="feed_pro_name">{state[0]}</p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="feed_right_side">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="feed_label_profile">Full Name:</label>
                      <Input
                        size="large"
                        className="feed_input_profile1"
                        value={state[0]}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label className="feed_label_profile">Email:</label>
                    <Input
                      size="large"
                      placeholder="$"
                      className="feed_input_profile1"
                      value={state[1]}
                      readOnly
                    />
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="feed_label_profile">
                      Feedback:
                    </label>
                    <br />
                    <Textarea
                      size="large"
                      className="feed_input_profile2"
                      value={state[2]}
                      readOnly
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedbackView;

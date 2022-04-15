import React, { useEffect, useState } from "react";
import "./feedback.css";
import { MdFeedback } from "react-icons/md";
import CountUp from "react-countup";
import FeedbackTable from "./FeedbackTable/FeedbackTable";
import axios from "axios";

const Feedback = () => {
  const [posts, setposts] = useState();

  useEffect(() => {
    axios
      .get(
        "https://updated-innovative-server.herokuapp.com/api/user/getfeedback"
      )
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid feedback_div">
        <h4 className="Feed_Heading">Feedback</h4>
        <div className="container Feed_Container">
          <div className="row">
            <div className="col-md-2 Feed_Col_Div text-center">
              <span className="Feed_Col_Icon">
                <MdFeedback />
              </span>
              <h6 className="Feed_Col_Heading">Total Feedbacks</h6>
              <h3 className="Feed_Col_Number">
                <CountUp
                  start={0}
                  end={posts === undefined ? 0 : posts.length}
                />
              </h3>
            </div>
            <div className="col-md-10"></div>
          </div>
          <div>
            <FeedbackTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;

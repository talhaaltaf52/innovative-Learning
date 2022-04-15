import React, { useEffect, useState } from "react";
import "./student.css";
import { FaUserGraduate } from "react-icons/fa";
import CountUp from "react-countup";
import StudentTable from "./StudentTable/StudentTable";
import axios from "axios";

const Student = () => {
  const [posts, setposts] = useState();

  useEffect(() => {
    axios
      .get("https://updated-innovative-server.herokuapp.com/api/user/students")
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
      });
  }, []);

  return (
    <>
      <div className="container-fluid student_div">
        <h4 className="Stud_Heading">Student</h4>
        <div className="container Stud_Container">
          <div className="row">
            <div className="col-md-2 Stud_Col_Div text-center">
              <span className="Stud_Col_Icon">
                <FaUserGraduate />
              </span>
              <h6 className="Stud_Col_Heading">Total Students</h6>
              <h3 className="Stud_Col_Number">
                <CountUp
                  start={0}
                  end={posts === undefined ? 0 : posts.length}
                />
              </h3>
            </div>
            <div className="col-md-10"></div>
          </div>
          <div>
            <StudentTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;

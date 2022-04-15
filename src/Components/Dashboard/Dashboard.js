import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { GiTeacher } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdFeedback } from "react-icons/md";
import CountUp from "react-countup";
import RegisteredStudentData from "./RegisteredStudentData/RegisteredStudentData";
import RegisteredTutorsData from "./RegisteredTutorsData/RegisteredTutorsData";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);

  const [getstudents, setGetStudents] = useState([]);
  const [getteachers, setGetTeachers] = useState([]);
  const [getfeedbacks, setGetFeedbacks] = useState([]);
  const [getcontacts, setGetContacts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    axios
      .get("https://updated-innovative-server.herokuapp.com/api/user/students")
      .then((res) => {
        console.log(res);
        setGetStudents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://updated-innovative-server.herokuapp.com/api/user/teachers")
      .then((res) => {
        console.log(res);
        setGetTeachers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://updated-innovative-server.herokuapp.com/api/user/getfeedback"
      )
      .then((res) => {
        console.log(res);
        setGetFeedbacks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://updated-innovative-server.herokuapp.com/api/user/getcontact "
      )
      .then((res) => {
        console.log(res);
        setGetContacts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container-fluid dash_div">
        <h4 className="Dash_Heading">Dashboard</h4>
        <div className="container Dash_Container">
          <div className="row">
            <div className="col-md-2 Col_Div text-center">
              <span className="Col_Icon">
                <FaUserGraduate />
              </span>
              <h6 className="Col_Heading">Total Students</h6>
              <h3 className="Col_Number">
                <CountUp start={0} end={getstudents.length} />
              </h3>
            </div>
            <div className="col-md-2 Col_Div_1 text-center">
              <span className="Col_Icon">
                <GiTeacher />
              </span>
              <h6 className="Col_Heading">Total Teachers</h6>
              <h3 className="Col_Number">
                <CountUp start={0} end={getteachers.length} />
              </h3>
            </div>
            <div className="col-md-2 Col_Div_2 text-center">
              <span className="Col_Icon">
                <MdFeedback />
              </span>
              <h6 className="Col_Heading">Total Feedbacks</h6>
              <h3 className="Col_Number">
                <CountUp start={0} end={getfeedbacks.length} />
              </h3>
            </div>
            <div className="col-md-2 Col_Div_3 text-center">
              <span className="Col_Icon">
                <RiContactsBook2Fill />
              </span>
              <h6 className="Col_Heading">Total Contacts</h6>
              <h3 className="Col_Number">
                <CountUp start={0} end={getcontacts.length} />
              </h3>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div>
            {loading ? (
              <Spinner
                animation="border"
                size="sm"
                className="Dashboard_Spinner"
              />
            ) : (
              <div className="Data_Row">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="Row_Heading">Registered Students</h3>
                    <div className="data">
                      {getstudents.map((val) => (
                        <RegisteredStudentData pic={val.pic} name={val.name} />
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h3 className="Row_Heading">Registered Teachers</h3>
                    <div className="data">
                      {getteachers.map((val) => (
                        <RegisteredTutorsData pic={val.pic} name={val.name} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

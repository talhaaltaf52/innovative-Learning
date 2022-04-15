import React from "react";
import MainNavbar from "../../../Components/MainNavbar/MainNavbar";
import StudentView from "../../../Components/Student/StudentTable/StudentView/StudentView";
import "./studentviewpage.css";

const StudentViewPage = () => {
  return (
    <>
      <MainNavbar />
      <div className="container-fluid student_view_page_div">
        <div className="container">
          <StudentView />
        </div>
      </div>
    </>
  );
};

export default StudentViewPage;

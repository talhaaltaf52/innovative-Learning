import React from "react";
import MainNavbar from "../../../Components/MainNavbar/MainNavbar";
import TeacherView from "../../../Components/Teacher/TeacherTable/TeacherView/TeacherView";
import "./teacherviewpage.css";

const TeacherViewPage = () => {
  return (
    <>
      <MainNavbar />
      <div className="container-fluid teacher_view_page_div">
        <div className="container">
          <TeacherView />
        </div>
      </div>
    </>
  );
};

export default TeacherViewPage;

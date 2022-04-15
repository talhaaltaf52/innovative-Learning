import React from "react";
import "./registeredstudentdata.css";

const RegisteredStudentData = ({pic, name}) => {
  return (
    <>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-2">
          <img src={pic} alt="Student Pic" className="Stud_Logo" />
        </div>
        <div className="col-7 Sname_Col">
            <h4 className="Stud_heading">{name}</h4>
        </div>
        <div className="col-2">
            <span className="stud_para">Student</span>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default RegisteredStudentData;

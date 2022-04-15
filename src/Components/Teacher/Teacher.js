import React, {useEffect, useState} from "react";
import "./teacher.css";
import { GiTeacher } from 'react-icons/gi';
import CountUp from 'react-countup';
import TeacherTable from "./TeacherTable/TeacherTable";
import axios from 'axios';

const Teacher = () => {
  const [posts, setposts] = useState();

  useEffect(() => {
    axios
      .get("https://updated-innovative-server.herokuapp.com/api/user/teachers")
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid teacher_div">
        <h4 className="Teach_Heading">Teacher</h4>
        <div className="container Teach_Container">
          <div className="row">
            <div className="col-md-2 Teach_Col_Div text-center">
              <span className="Teach_Col_Icon">
                <GiTeacher />
              </span>
              <h6 className="Teach_Col_Heading">Total Teachers</h6>
              <h3 className="Teach_Col_Number">
                <CountUp start={0} end={posts === undefined ? 0 : posts.length} />
              </h3>
            </div>
            <div className="col-md-10"></div>
          </div>
          <div>
            <TeacherTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Teacher;

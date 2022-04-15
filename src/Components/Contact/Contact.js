import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "axios";
import { RiContactsBook2Fill } from "react-icons/ri";
import './contact.css'
import ContactTable from "./ContactTable/ContactTable";

const Contact = () => {
  const [posts, setposts] = useState();

  useEffect(() => {
    axios
      .get(
        "https://updated-innovative-server.herokuapp.com/api/user/getcontact"
      )
      .then((res) => {
        console.log(res.data);
        setposts(res.data);
      });
  }, []);
  return (
    <>
      <div className="container-fluid contact_div">
        <h4 className="Cont_Heading">Contact</h4>
        <div className="container Cont_Container">
          <div className="row">
            <div className="col-md-2 Cont_Col_Div text-center">
              <span className="Cont_Col_Icon">
                <RiContactsBook2Fill />
              </span>
              <h6 className="Cont_Col_Heading">Total Contacts</h6>
              <h3 className="Cont_Col_Number">
                <CountUp
                  start={0}
                  end={posts === undefined ? 0 : posts.length}
                />
              </h3>
            </div>
            <div className="col-md-10"></div>
          </div>
          <div><ContactTable /></div>
        </div>
      </div>
    </>
  );
};

export default Contact;

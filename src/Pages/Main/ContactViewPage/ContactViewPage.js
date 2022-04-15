import React from "react";
import ContactView from "../../../Components/Contact/ContactTable/ContactView/ContactView";
import MainNavbar from "../../../Components/MainNavbar/MainNavbar";
import "./contactviewpage.css";

const ContactViewPage = () => {
  return (
    <>
      <MainNavbar />
      <div className="container-fluid contact_view_page_div">
        <div className="container">
          <ContactView />
        </div>
      </div>
    </>
  );
};

export default ContactViewPage;

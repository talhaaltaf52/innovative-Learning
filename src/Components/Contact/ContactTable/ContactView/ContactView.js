import React from "react";
import { Input } from "antd";
import "./contactview.css";
import { useLocation } from "react-router-dom";
import { Textarea } from "@chakra-ui/react";
import ContactProfilePic from "../../../../Assets/Contact.jpg";

const ContactView = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="container-fluid">
        <div className="container cont_pro_heading">
          <h2>Contact</h2>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 cont_left_side">
              <div className="text-center cont_pro_text">
                <img
                  src={ContactProfilePic}
                  alt="pro_pic"
                  className="cont_profile_pic mt-4"
                />
                <p className="cont_pro_username">{state[1]}</p>
                <p className="cont_pro_name">{state[0]}</p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="cont_right_side">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="cont_label_profile">Full Name:</label>
                      <Input
                        size="large"
                        className="cont_input_profile1"
                        value={state[0]}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label className="cont_label_profile">Email:</label>
                    <Input
                      size="large"
                      placeholder="$"
                      className="cont_input_profile1"
                      value={state[1]}
                      readOnly
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="cont_label_profile">Contact:</label>
                    <Input
                      size="large"
                      placeholder="$"
                      className="cont_input_profile1"
                      value={`+92 ${state[2]}`}
                      readOnly
                    />
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="cont_label_profile">
                      Contact Message:
                    </label>
                    <br />
                    <Textarea
                      size="large"
                      className="cont_input_profile2"
                      value={state[3]}
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

export default ContactView;

import React from "react";
import { Input } from "antd";
import "./studentview.css";
import { useLocation } from "react-router-dom";

const StudentView = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="container-fluid">
        <div className="container  pro_heading">
          <h2>Student Profile</h2>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 left_side">
              <div className="text-center pro_text">
                <img
                  src={state[0]}
                  alt="pro_pic"
                  className="profile_pic mt-4"
                />
                <p className="pro_username">@{state[2]}</p>
                <p className="pro_name">{state[1]}</p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="right_side">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="label_profile">Full Name:</label>
                      <Input
                        size="large"
                        className="input_profile1"
                        value={state[1]}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="label_profile">Username:</label>
                      <Input
                        size="large"
                        className="input_profile1"
                        value={state[2]}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="label_profile">Email:</label>
                      <Input
                        size="large"
                        className="input_profile1"
                        value={state[3]}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="label_profile">Gender:</label>
                      <Input
                        size="large"
                        className="input_profile1"
                        value={state[4]}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="label_profile">Contact:</label>
                      <Input
                        size="large"
                        placeholder="$"
                        className="input_profile1"
                        value={`+92 ${state[5]}`}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label className="label_profile">Qualification:</label>
                    <Input
                      size="large"
                      placeholder="$"
                      className="input_profile1"
                      value={state[6]}
                      readOnly
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="label_profile">Role:</label>
                    <Input
                      size="large"
                      placeholder="$"
                      className="input_profile1"
                      value={state[7]}
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

export default StudentView;

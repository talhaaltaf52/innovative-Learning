import React from "react";
import { Input } from "antd";
import "./teacherview.css";
import { useLocation } from "react-router-dom";
import { Textarea } from "@chakra-ui/react";

const TeacherView = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="container-fluid">
        <div className="container  teach_pro_heading">
          <h2>Teacher Profile</h2>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3 teach_left_side">
              <div className="text-center teach_pro_text">
                <img
                  src={state[0]}
                  alt="pro_pic"
                  className="teach_profile_pic mt-4"
                />
                <p className="teach_pro_username">@{state[2]}</p>
                <p className="teach_pro_name">{state[1]}</p>
              </div>
            </div>
            <div className="col-md-9">
              <div className="teach_right_side">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <label className="teach_label_profile">Full Name:</label>
                      <Input
                        size="large"
                        className="teach_input_profile1"
                        value={state[1]}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="teach_label_profile">Username:</label>
                      <Input
                        size="large"
                        className="teach_input_profile1"
                        value={state[2]}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="teach_label_profile">Email:</label>
                      <Input
                        size="large"
                        className="teach_input_profile1"
                        value={state[3]}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="teach_label_profile">Gender:</label>
                      <Input
                        size="large"
                        className="teach_input_profile1"
                        value={state[4]}
                        readOnly
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="teach_label_profile">Contact:</label>
                      <Input
                        size="large"
                        placeholder="$"
                        className="teach_input_profile1"
                        value={`+92 ${state[5]}`}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="teach_label_profile">Subject:</label>
                      <Input
                        size="large"
                        className="teach_input_profile1"
                        value={state[6]}
                        readOnly
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="teach_label_profile">
                        Rate Per Hour:
                      </label>
                      <Input
                        size="large"
                        placeholder="$"
                        className="teach_input_profile1"
                        value={`RS ${state[7]}`}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label className="teach_label_profile">
                      Qualification:
                    </label>
                    <Input
                      size="large"
                      placeholder="$"
                      className="teach_input_profile1"
                      value={state[8]}
                      readOnly
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="teach_label_profile">Role:</label>
                    <Input
                      size="large"
                      placeholder="$"
                      className="teach_input_profile1"
                      value={state[9]}
                      readOnly
                    />
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="teach_label_profile">About Yourself:</label>
                    <Textarea
                      size="large"
                      className="teach_input_profile2"
                      value={state[10]}
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

export default TeacherView;

import React, { useState } from "react";
import "./login.css";
import RegLogo from "../../Assets/navbarlogo.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [icon, setIcon] = useState(false);

  const toggleIcon = () => {
    setIcon((prevState) => !prevState);
  };

  const Login = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGIN",
      payload: {
        email: email,
        password: password,
      },
    });

    if (email === "tehreemiqbal91@gmail.com" ? password === "d22f5163" : "") {
      toast.success("Login Successfully");
    } else {
      toast.error("Login Failed");
    }
  };

  return (
    <>
      <div className="container-fluid Login_Fluid">
        <div className="text-center">
          <img src={RegLogo} className="Login_Logo" alt="logo" />
        </div>
        <div className="container Login_Container">
          <div>
            <div className="text-center">
              <h5 className="Login_heading">Admin Panel</h5>
            </div>
            <div className="text-center">
              <form>
                <div className="input_1">
                  <span className="email_icon">
                    <FaUserAlt />
                  </span>
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control email_field"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input_2">
                  <span className="lock_icon">
                    <FaLock />
                  </span>
                  <input
                    type={icon ? "text" : "password"}
                    placeholder="Password"
                    className="form-control password_field"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name="password"
                  />
                  <span className="eye_icon" onClick={toggleIcon}>
                    {icon ? <AiFillEyeInvisible /> : <AiFillEye />}
                  </span>
                </div>
                <button className="Login_button" onClick={Login}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

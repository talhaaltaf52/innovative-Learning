import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Main/Home";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./Pages/Main/DashboardPage";
import ReverseRoute from "./routes/ReverseRoute";
import TeacherPage from "./Pages/Main/TeacherPage";
import StudentPage from "./Pages/Main/StudentPage";
import FeedbackPage from "./Pages/Main/FeedbackPage";
import ContactPage from "./Pages/Main/ContactPage";
import { ToastContainer } from "react-toastify";
import StudentViewPage from "./Pages/Main/StudentViewPage/StudentViewPage";
import TeacherViewPage from "./Pages/Main/TeacherViewPage/TeacherViewPage";
import FeedbackViewPage from "./Pages/Main/FeedbackViewPage/FeedbackViewPage";
import ContactViewPage from "./Pages/Main/ContactViewPage/ContactViewPage";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ReverseRoute />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/student-profile/:id" element={<StudentViewPage />} />
        <Route path="/teacher-profile/:id" element={<TeacherViewPage />} />
        <Route path="/feedback-profile/:id" element={<FeedbackViewPage />} />
        <Route path="/contact-profile/:id" element={<ContactViewPage />} />
      </Routes>
    </>
  );
};

export default App;

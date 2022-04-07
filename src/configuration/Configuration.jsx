import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginSignup, Home ,CompletedTasks} from "../pages/index";
import AppWrapper from "../wrapper/AppWrapper";
import PrivateRoute from "./PrivateRoute";
const Configuration = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/completed-tasks"
          element={
            <PrivateRoute>
              <CompletedTasks />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/tasks"
          element={
            <PrivateRoute>
              <AppWrapper />
            </PrivateRoute>
          }
        /> */}
      
      </Routes>
    </>
  );
};

export default Configuration;

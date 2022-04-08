import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginSignup, Home ,CompletedTasks, AddTask} from "../pages/index";
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
          path="/add-tasks"
          element={
            <PrivateRoute>
              <AddTask />
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
      
      </Routes>
    </>
  );
};

export default Configuration;

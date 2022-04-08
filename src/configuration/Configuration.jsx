import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  LoginSignup,
  Home,
  CompletedTasks,
  AddTask,
  AssigneeTasks,
  PendingTasks,
  ReporterTasks,
  UpdateTask,
} from "../pages/index";
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

        <Route
          path="/pending-tasks"
          element={
            <PrivateRoute>
              <PendingTasks />
            </PrivateRoute>
          }
        />
         <Route
          path="/assigned-tasks"
          element={
            <PrivateRoute>
              <AssigneeTasks />
            </PrivateRoute>
          }
        />
         <Route
          path="/reporter-tasks"
          element={
            <PrivateRoute>
              <ReporterTasks />
            </PrivateRoute>
          }
        />
        <Route
          path="/update-tasks/:id"
          element={
            <PrivateRoute>
              <UpdateTask/>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Configuration;

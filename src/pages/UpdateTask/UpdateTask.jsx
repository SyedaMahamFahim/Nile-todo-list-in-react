import React from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import { SectionTitle, TaskForm } from "../../components/index";
import { Box } from "@chakra-ui/react";
const UpdateTask = () => {
  return (
    <>
      <SectionTitle text={"Add New Tasks"} align="center" variant="h1" 
       subText={"Update your task easily from here"}
      />
      <Box mt={{ base: "2rem" }} m={{ md: "1.5rem", lg: "3rem" }}>
        <TaskForm />
      </Box>
    </>
  );
};

export default AppWrapper(UpdateTask);

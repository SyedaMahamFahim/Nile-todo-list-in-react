import React from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import { SectionTitle, TaskCard } from "../../components/index";
import { Box } from "@chakra-ui/react";

const PendingTasks = () => {
  return (
    <>
      <SectionTitle text={"Pending Tasks"} align="center" variant="h1" 
            subText={"Complete your task ASAP"}

      />
      <Box mt={{ base: "2rem" }} m={{ md: "1.5rem", lg: "3rem" }}>
        <TaskCard/>
      </Box>
    </>
  );
};

export default AppWrapper(PendingTasks);

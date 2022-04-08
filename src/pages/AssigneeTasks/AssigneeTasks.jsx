import React from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import { SectionTitle, TaskCard } from "../../components/index";
import { Box } from "@chakra-ui/react";

const AssigneeTasks = () => {
  return (
    <>
      <SectionTitle text={"Assignee Tasks"} align="center" variant="h1"
      subText={"The tasks has been assigned to you by someone"}
      />
      <Box mt={{ base: "2rem" }} m={{ md: "1.5rem", lg: "3rem" }}>
        <TaskCard/>
      </Box>
    </>
  );
};

export default AppWrapper(AssigneeTasks);

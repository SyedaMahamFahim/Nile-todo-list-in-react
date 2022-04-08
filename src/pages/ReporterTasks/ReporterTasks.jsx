import React from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import { SectionTitle, TaskCard } from "../../components/index";
import { Box } from "@chakra-ui/react";

const ReporterTasks= () => {
  return (
    <>
      <SectionTitle text={"Reporter Tasks"} align="center" variant="h1"
      subText={"The tasks you have assigned to someone"}
      />

      <Box mt={{ base: "2rem" }} m={{ md: "1.5rem", lg: "3rem" }}>
        <TaskCard/>
      </Box>
    </>
  );
};

export default AppWrapper(ReporterTasks);

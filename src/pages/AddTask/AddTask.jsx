import React from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import { SectionTitle} from "../../components/index";
import { Flex } from "@chakra-ui/react";
const AddTask = () => {
  return (
    <>
      <SectionTitle text={"Add New Tasks"} align="center" variant="h1" />
      <Flex
        wrap={"wrap"}
        align="center"
        justify="center"
        mt={{ base: "2rem" }}
        m={{ md: "1.5rem", lg: "5rem" }}
      ></Flex>
    </>
  );
};

export default AppWrapper(AddTask);

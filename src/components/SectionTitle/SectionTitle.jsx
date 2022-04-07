import React from "react";
import { Center, Text } from "@chakra-ui/react";

const SectionTitle = ({ text }) => {
  return (
    <>
      <Center>
        <Text fontSize="5xl" fontWeight={900}>{text}</Text>
      </Center>
    </>
  );
};

export default SectionTitle;

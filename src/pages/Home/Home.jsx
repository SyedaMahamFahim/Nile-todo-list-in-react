import React from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import {SectionTitle, TaskCard} from '../../components/index'
import { Flex } from "@chakra-ui/react";
const Home = () => {
  return (
    <>
      <SectionTitle text={"All Tasks"} align="center"
      variant="h1"
      />
      <Flex 
      wrap={'wrap'}
      align="center"
      justify="center"
      mt={{ base: '2rem'}}
       m={{ md: '1.5rem', lg: '5rem' }}>
      <TaskCard  />
      <TaskCard  />
      <TaskCard  />
      <TaskCard  />
      <TaskCard  />
      <TaskCard  />
      
     
      </Flex>
      
    </>
  );
};

export default AppWrapper(Home);

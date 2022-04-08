import React from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Select,
  Button,
  FormErrorMessage,
  FormHelperText,
  Box,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
const TaskForm = () => {
  return (
    <>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
      >
        <FormControl mt={5}>
          <FormLabel htmlFor="title">Title</FormLabel>
          <Input id="title" type="text" />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="title">Description</FormLabel>
          <Textarea placeholder="Here is a sample placeholder" size="sm" />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="status">Tag</FormLabel>
          <Input id="tag" type="text" />
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="status">Status</FormLabel>
          <Select id="status" placeholder="Select select">
            <option>Active</option>
            <option>Pending</option>
          </Select>
        </FormControl>
        <FormControl mt={5}>
          <FormLabel htmlFor="assign-user">
            Want to assign this task to someone?
          </FormLabel>
          <Input id="assign-user" type="email" />
          <FormHelperText>
            Enter his/her email. Make sure they are the user of Nile Auth
          </FormHelperText>
        </FormControl>
        <Button
        mt={5}
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          Create Task
        </Button>
      </Box>
    </>
  );
};

export default TaskForm;

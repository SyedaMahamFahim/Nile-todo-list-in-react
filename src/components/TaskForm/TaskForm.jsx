import React, { useState} from "react";
import axios from "axios";
import todoUrl from "../../configuration/todoUrl";
import {
  FormControl,
  FormLabel,
  Textarea,
  Select,
  Button,
  ScaleFade,
  Box,
  Input,
  useColorModeValue,
  Switch,
  useDisclosure,
  CircularProgress,
  Center
} from "@chakra-ui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TaskForm = () => {
  const { isOpen, onToggle } = useDisclosure();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [assignUser, setAssignUser] = useState("");
  const [tag, setTag] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  const errorHandler = () => {
    if (!title || !desc || !tag || !status) {
      if (errors) {
        toast.error("Kindly, fill the required fields!", {
          toastId: "todoerror1",
          autoClose: 4000,
        });
      }
      setErrors(true);
      setLoading(false);
    }
    return errors;
  };

  const formSubmission = async (e) => {
    e.preventDefault();
    setLoading(true);
    errorHandler();
    let allFieldsValue = {
      title,
      desc,
      tag,
      status,
      assignUserEmailAddress: `${assignUser ? assignUser : "none"}`,
      emailAddress: localStorage.getItem("userEmail"),
    };

    console.log(allFieldsValue)
    if (!errorHandler()) {
      await axios
        .post(`${todoUrl}/api/v1/todo-controllers/add-todo/`, allFieldsValue)

        .then(({ data }) => {
          console.log(data);
          setLoading(true);
          toast.success(data.message, {
            autoClose: 1000,
            toastId: "todoerror1",
          });
          
        })
        
        .catch((err) => {
          setErrors(true);
          toast.error(err.message, {
            autoClose: 1000,
            toastId: "todoerror1",
          });
          setLoading(false);
        });

      setLoading(false);
      
      
    }
  };


  return (
    <>
     <ToastContainer />
      {loading ? (
        <Center h='50vh'> <CircularProgress isIndeterminate color="black" size={"3rem"}/></Center>
       
      ) : (
        <>
          <Box
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
          >
            <FormControl mt={5} isRequired>
              <FormLabel htmlFor="title">Title</FormLabel>
              <Input
                id="title"
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel htmlFor="desc">Description</FormLabel>
              <Textarea
                name="desc"
                placeholder="Here is a sample placeholder"
                size="sm"
                onChange={(e) => setDesc(e.target.value)}
              />
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel htmlFor="tag">Tag</FormLabel>
              <Input
                id="tag"
                type="text"
                name="tag"
                onChange={(e) => setTag(e.target.value)}
              />
            </FormControl>
            <FormControl mt={5} isRequired>
              <FormLabel htmlFor="status">Status</FormLabel>
              <Select
                id="status"
                placeholder="Select select"
                name="status"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value={"active"}>Active</option>
                <option value={"pending"}>Pending</option>
              </Select>
            </FormControl>
            <FormControl display="flex" alignItems="center" mt={8}>
              <FormLabel htmlFor="is-assign" mb="0">
                Want to assign this task to someone?
              </FormLabel>
              <Switch id="is-assign" onChange={onToggle} />
            </FormControl>
            <ScaleFade initialScale={0.9} in={isOpen}>
              <FormControl mt={5}>
                <FormLabel htmlFor="assign-user">
                  Enter his/her email.
                </FormLabel>

                <Input
                  id="assign-user"
                  type="email"
                  name="assignUser"
                  onChange={(e) => setAssignUser(e.target.value)}
                />
              </FormControl>
            </ScaleFade>

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
              onClick={formSubmission}
            >
              Create Task
            </Button>
          </Box>
        </>
      )}
    </>
  );
};

export default TaskForm;

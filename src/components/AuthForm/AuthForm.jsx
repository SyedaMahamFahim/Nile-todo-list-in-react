import React, { useState, useEffect } from "react";
import axios from "axios";
import baseUrl from "../../configuration/baseUrl";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  CircularProgress,
} from "@chakra-ui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = () => {
  const navigate = useNavigate();
  const [signUp, setSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState(`${baseUrl}login`);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  // const [token, setToken] = useState("");
  const errorHandler = () => {
    if (!email || !password) {
      if (errors) {
        toast.error("Kindly, fill the credentials!", {
          toastId: "error1",
          autoClose: 1000,
        });
      }
      setErrors(true);
      setLoading(false);
    } else if (password.length < 3) {
      toast.error("Password must not be less than 8 characters", {
        autoClose: 1000,
        toastId: "error2",
      });
      setErrors(true);
      setLoading(false);
    }
    return errors;
  };

  const setAuthForm = () => {
    setSignUp(!signUp);
    console.log(signUp);
    if (!signUp) {
      setUrl(`${baseUrl}users`);
    }
  };

  const loginForm = async (e) => {
    e.preventDefault();
    setLoading(true);
   localStorage.setItem('userEmail',email)
    errorHandler();
    if (!errorHandler()) {
      await axios
        .post(url, {
          email: email,
          password: password,
        })
        .then(({ data: { token } }) => {
          localStorage.setItem("token", token);
          navigate("/home");
          setLoading(false);
        })
        .catch(() => {
          setErrors(true);
          toast.error("Wrong Email or Password", {
            autoClose: 1000,
            toastId: "error3",
          });
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    let getUserToken = localStorage.getItem("token");
    if (
      getUserToken === undefined ||
      getUserToken === null ||
      getUserToken === ""
    ) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <ToastContainer />

      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>
              {signUp ? "Create your account" : "Sign in to your account"}
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"center"}
                  justify={"center"}
                >
                  <Text
                    fontSize="md"
                    color={"blue.400"}
                    cursor={"pointer"}
                    onClick={setAuthForm}
                  >
                    {signUp
                      ? "Already has an account?"
                      : "Create a new account"}
                  </Text>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={loginForm}
                >
                  {loading ? (
                    <CircularProgress isIndeterminate color="gray.50" />
                  ) : signUp ? (
                    "Sign up"
                  ) : (
                    "Sign in"
                  )}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default AuthForm;

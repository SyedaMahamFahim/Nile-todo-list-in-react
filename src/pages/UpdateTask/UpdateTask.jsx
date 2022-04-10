import React,{useState} from "react";
import AppWrapper from "../../wrapper/AppWrapper";
import { SectionTitle, UpdateTaskForm } from "../../components/index";
import { Box } from "@chakra-ui/react";
import {useNavigate,useParams} from 'react-router-dom'

const UpdateTask = () => {  
  const navigate = useNavigate();
  const params = useParams()

  const [isRedirectToHome, setIsRedirectToHome] = useState(false);

  const sendDataToParent = (redirectedValue) => { 
    setIsRedirectToHome(redirectedValue)
  };
  
  if(isRedirectToHome) {
    navigate("/get-all-tasks");
  }

  const updateTaskForm=()=>{
    const getTaskId=params.id

  }
  return (
    <>
      <SectionTitle text={"Add New Tasks"} align="center" variant="h1" subText={"Create a new task"}/>
      {console.log(params.id)
}
      <Box mt={{ base: "2rem" }} m={{ md: "1.5rem", lg: "3rem" }}>
        <UpdateTaskForm/>
      </Box>
    </>
  );
};

export default AppWrapper(UpdateTask);

import React from 'react'
import AppWrapper from "../../wrapper/AppWrapper";
import GetApiWrapper from "../../wrapper/GetApiWrapper";
const GetAllTasks = () => {
  return (
    <>
    <GetApiWrapper
    status={"completed"}
    endPoint={"get-all-todos"}
    pageTitle={'All Tasks'}
    pageSubTitle={'All Your Created Tasks'}
    />
          </>
  )
}

export default AppWrapper(GetAllTasks);


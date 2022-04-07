const useAuth = () => {
  let token = localStorage.getItem("token");
  if (token === null || token === undefined || token === "") {
    return false;
  } 
    return true;
};

export default useAuth;

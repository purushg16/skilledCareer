import { Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

export const LoginLayout = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("token") !== null) navigate("/admin");

  return (
    <Flex w="100%" h="100vh" align="center" justify="center">
      <Outlet />
    </Flex>
  );
};

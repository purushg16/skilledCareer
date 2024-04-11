import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface ChangePassword {
  password: string;
}

interface Login {
  userId: string;
  password: string;
}

const loginClient = new APIClient<Login>("/admin/login");

const useAdminLogin = (callback?: () => void) => {
  const toast = useToast();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginClient.authorizationPost,
    onSuccess: () => {
      navigate("/admin");
      toast({
        title: "Welcome Boss!",
        duration: 2000,
        position: "top",
        status: "success",
      });
      callback && callback();
    },
    onError: (error) =>
      toast({
        title: error.message,
        duration: 2000,
        position: "top",
        status: "error",
      }),
  });
};

const changePasswordClient = new APIClient<ChangePassword>(
  "/admin/changePassword"
);

const useChangePassword = (callback: () => void) => {
  const toast = useToast();
  return useMutation({
    mutationFn: changePasswordClient.authorizationPost,
    onSuccess: () => {
      toast({
        title: "Password Changed Successfully",
        duration: 2000,
        position: "top",
        status: "success",
      });
      callback();
    },
    onError: (error) =>
      toast({
        title: error.message,
        duration: 2000,
        position: "top",
        status: "success",
      }),
  });
};

export { useChangePassword, useAdminLogin };

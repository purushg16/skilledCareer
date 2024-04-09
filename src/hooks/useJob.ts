import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { AddJobInterface } from "../entities/AddJobInterface";
import { useToast } from "@chakra-ui/react";

interface DelJobInterface {
  jobId: string;
}

const postJobClient = new APIClient<AddJobInterface>("/job/postJob");
const usePostJob = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: postJobClient.postRequest,
    onSuccess: () =>
      toast({
        title: "Job Posted Successfully",
        position: "top",
        duration: 2000,
        status: "success",
      }),
    onError: (error: Error) =>
      toast({
        title: error.message,
        position: "top",
        duration: 2000,
        status: "error",
      }),
  });
};

const editJobClient = new APIClient<AddJobInterface>("/job/editJob");
const useEditJob = () => {
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editJobClient.postRequest,
    onSuccess: () => {
      toast({
        title: "Job Editted Successfully",
        position: "top",
        duration: 2000,
        status: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["job"],
      });
    },
    onError: (error: Error) =>
      toast({
        title: error.message,
        position: "top",
        duration: 2000,
        status: "error",
      }),
  });
};

const delJobClient = new APIClient<DelJobInterface>("/job/deleteJob");
const useDelJob = (callback: () => void) => {
  const toast = useToast();
  return useMutation({
    mutationFn: delJobClient.postRequest,
    onSuccess: () => {
      toast({
        title: "Job Deletted Successfully",
        position: "top",
        duration: 2000,
        status: "success",
      }),
        callback();
    },
    onError: (error: Error) =>
      toast({
        title: error.message,
        position: "top",
        duration: 2000,
        status: "error",
      }),
  });
};

export { usePostJob, useEditJob, useDelJob };

import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface AddIndustryInterface {
  sector: string;
}

interface DelIndustryInterface {
  sectorId: string;
}

const postIndustryClient = new APIClient<AddIndustryInterface>(
  "/industry/addSector"
);
const usePostIndustry = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: postIndustryClient.postRequest,
    onSuccess: () =>
      toast({
        title: "Industry Posted Successfully",
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

const delIndustryClient = new APIClient<DelIndustryInterface>(
  "/industry/deleteSector"
);
const useDelIndustry = (callback: () => void) => {
  const toast = useToast();
  return useMutation({
    mutationFn: delIndustryClient.postRequest,
    onSuccess: () => {
      toast({
        title: "Industry Deleted Successfully",
        position: "top",
        duration: 2000,
        status: "success",
      });
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

export { usePostIndustry, useDelIndustry };

import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Review from "../entities/review";
import APIClient from "../services/api-client";

interface DelReviewInterface {
  reviewId: string;
}

const addReview = new APIClient<Review>("/review/addReview");
const useAddReview = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: addReview.postRequest,
    onSuccess: () =>
      toast({
        title: "Review Added Successfully",
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

const editReview = new APIClient<Review>("/review/editReview");
const useEditReview = () => {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: editReview.postRequest,
    onSuccess: () => {
      toast({
        title: "Review Editted Successfully",
        position: "top",
        duration: 2000,
        status: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["user", "reviews"],
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

const delReview = new APIClient<DelReviewInterface>("/review/deleteReview");
const useDelReview = (callback: () => void) => {
  const toast = useToast();
  return useMutation({
    mutationFn: delReview.postRequest,
    onSuccess: () => {
      toast({
        title: "Review Deleted Successfully",
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

export { useAddReview, useEditReview, useDelReview };

import { useQuery } from "@tanstack/react-query";
import { Industry } from "../entities/industry";
import APIClient from "../services/api-client";
import Review from "../entities/review";
import { Job } from "../entities/Job";
import useEditJobStore from "../store/editJobStore";

const getSingleJob = new APIClient<Job>("/user/getSingleJob");
const useGetSingleJob = (jobId: string, enabled: boolean) => {
  const setAllValues = useEditJobStore((s) => s.setAllValues);

  return useQuery({
    queryKey: ["job", jobId],
    queryFn: () =>
      getSingleJob
        .getSingleItem({
          params: {
            jobId: jobId,
          },
        })
        .then((res) => {
          setAllValues({ ...res.data });
          return res;
        }),
    refetchOnWindowFocus: false,
    retry: 2,
    enabled: enabled,
  });
};
const getIndustries = new APIClient<Industry>("/user/getSectors");
const useGetIndustries = () =>
  useQuery({
    queryKey: ["user", "industries"],
    queryFn: getIndustries.getRequest,
    refetchOnWindowFocus: false,
    retry: 2,
  });

const getRviews = new APIClient<Review>("/user/getReviews");
const useGetReviews = () =>
  useQuery({
    queryKey: ["user", "reviews"],
    queryFn: getRviews.getRequest,
    refetchOnWindowFocus: false,
    retry: 2,
  });

export { useGetSingleJob, useGetIndustries, useGetReviews };

import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { SinglePropertyResponse } from "../services/api-client";
import useJobQueryStore from "../store/jobQueryStore";
import { Job } from "../entities/Job";

interface JobRes {
  docs: Job[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number;
}

const getAllJobs = new APIClient<JobRes>("/user/getJobs");
const useGetAllJobs = () => {
  const jobQuery = useJobQueryStore();

  return useInfiniteQuery<SinglePropertyResponse<JobRes>, Error>({
    queryKey: ["jobs", "allJobs", jobQuery],
    queryFn: ({ pageParam = 1 }) =>
      getAllJobs.getSingleItem({
        params: {
          page: pageParam,
          itemPerPage: 10,
          location: jobQuery.location,
          workQualification: jobQuery.workQualification,
          qualification: jobQuery.qualification,
          industry: jobQuery.industry,
          minSalary: jobQuery.minSalary,
          employmentMode: jobQuery.employmentMode,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasNextPage ? lastPage.data.nextPage : undefined,
    refetchOnWindowFocus: false,
  });
};
export { useGetAllJobs };

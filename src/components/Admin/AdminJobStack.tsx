import { SimpleGrid } from "@chakra-ui/layout";
import { Button, Flex, Heading, Spinner, VStack } from "@chakra-ui/react";
import { JobCard } from "./JobCard";
import { PlusIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import useAddJobStore from "../../store/addJobStore";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGetAllJobs } from "../../hooks/useGetAllJobs";
import React from "react";

export const AdminJobStack = () => {
  const { data, fetchNextPage, isLoading, isFetched, hasNextPage } =
    useGetAllJobs();
  const fetchedGameLength =
    data?.pages.reduce((total, page) => total + page.data.docs.length, 0) || 0;

  const navigate = useNavigate();
  const resetStore = useAddJobStore((s) => s.reset);

  const newJobClick = () => {
    resetStore();
    navigate("addJob");
  };

  return (
    <VStack align="start" gap={4}>
      <Flex gap={4} w="100%" align="center" justify="space-between">
        <Heading fontSize="xl"> All Job </Heading>
        <Button
          size="sm"
          leftIcon={<PlusIcon />}
          colorScheme="blue"
          onClick={newJobClick}
        >
          New Job
        </Button>
      </Flex>

      {isLoading && <Spinner />}

      {isFetched && (
        <InfiniteScroll
          dataLength={fetchedGameLength}
          hasMore={hasNextPage}
          next={() => fetchNextPage()}
          loader={<Spinner />}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="100%">
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.data.docs.map((job, i) => (
                  <JobCard job={job} key={i} />
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </InfiniteScroll>
      )}
    </VStack>
  );
};

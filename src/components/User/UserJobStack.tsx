import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { UserJobCard } from "./UserJobCard";
import { useGetAllJobs } from "../../hooks/useGetAllJobs";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const UserJobStack = () => {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetched } =
    useGetAllJobs();
  const fetchedGameLength =
    data?.pages.reduce((total, page) => total + page.data.docs.length, 0) || 0;

  if (data?.pages[0].data.docs.length === 0 && isFetched)
    return (
      <Heading fontSize="xl" textAlign="left" alignSelf="start">
        No jobs matching filters!
      </Heading>
    );
  if (isLoading) return <Spinner />;

  return (
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
              <UserJobCard job={job} key={i} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Box w={{ base: "5%", md: "20%", lg: "25%" }} aspectRatio="1/1" />
    </InfiniteScroll>
  );
};

export default UserJobStack;

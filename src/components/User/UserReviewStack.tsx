import { Flex, Spinner } from "@chakra-ui/react";
import UserReviewCard from "./UserReviewCard";
import { useGetReviews } from "../../hooks/useGet";

const UserReviewStack = () => {
  const { data, isLoading, isFetched } = useGetReviews();

  return (
    <Flex maxW="100%" overflowX="scroll" gap={4}>
      {isLoading && <Spinner />}

      {isFetched &&
        data?.data.map((review) => (
          <UserReviewCard key={review._id} review={review} />
        ))}
    </Flex>
  );
};

export default UserReviewStack;

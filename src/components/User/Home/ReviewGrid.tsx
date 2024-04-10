import { SimpleGrid, Spinner, Text, VStack } from "@chakra-ui/react";
import { ResponsiveHeader } from "../ResponsiveTypography";
import { useGetReviews } from "../../../hooks/useGet";
import UserReviewCard from "./UserReviewCard";

const ReviewGrid = () => {
  const { data, isLoading, isFetched } = useGetReviews();

  return (
    <VStack align="start" p={4} py={12}>
      <ResponsiveHeader text="Reviews" />
      <Text size="sm"> about us from true hearts! </Text>
      {isLoading && <Spinner />}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        mt={12}
        spacing={4}
        w="100%"
      >
        {isFetched &&
          data?.data.map((review) => (
            <UserReviewCard key={review._id} review={review} />
          ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ReviewGrid;

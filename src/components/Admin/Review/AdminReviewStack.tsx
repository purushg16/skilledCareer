import { Flex, Heading, SimpleGrid, Spacer, VStack } from "@chakra-ui/react";
import { useGetReviews } from "../../../hooks/useGet";
import ReviewCard from "./ReviewCard";
import AddReviewModal from "./AddReviewModal";

const AdminReviewStack = () => {
  const { data } = useGetReviews();
  return (
    <VStack gap={8} align="start">
      <Flex w="100%">
        <Heading fontSize="xl"> All Reviews </Heading>
        <Spacer />
        <AddReviewModal />
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        {data?.data.map((review) => (
          <ReviewCard review={review} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default AdminReviewStack;

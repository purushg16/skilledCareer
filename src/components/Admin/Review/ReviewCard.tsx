import { Flex, Heading, Text, VStack, useDisclosure } from "@chakra-ui/react";
import Review from "../../../entities/review";
import RatingShower from "./RatingShower";
import ReviewEditModal from "./ReviewEditModal";
import { useLongPress } from "use-long-press";
import DeleteAlertDialog from "../DeleteAlertDialog";

const ReviewCard = ({ review }: { review: Review }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onLongPress = useLongPress(() => {
    onOpen();
  });

  return (
    <>
      <Flex
        {...onLongPress()}
        flexDir="column"
        gap={8}
        align="start"
        justify="start"
        border="1px solid"
        borderRadius={10}
        borderColor="gray.700"
        p={4}
        cursor="pointer"
        pos="relative"
      >
        <ReviewEditModal review={review} />
        <VStack align="start" gap={0}>
          <RatingShower value={review.rating} />
          <Heading fontSize="lg" mt={2}>
            {review.shortReview}
          </Heading>
          <Text fontSize="sm" color="gray">
            {review.briefReview}
          </Text>
        </VStack>

        <VStack gap={0} align="start">
          <Heading fontSize="md" textTransform="capitalize">
            {review.name}
          </Heading>
          <Text fontSize="sm" color="gray">
            {review.company}
          </Text>
        </VStack>
      </Flex>
      <DeleteAlertDialog
        isOpen={isOpen}
        onClose={onClose}
        heading="Review"
        field="review"
        reviewId={review._id}
      />
    </>
  );
};

export default ReviewCard;

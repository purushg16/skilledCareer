import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import Review from "../../../entities/review";
import RatingShower from "../../Admin/Review/RatingShower";

const UserReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card w="100%" minW={300} bg="white" color="black" borderRadius={3}>
      <CardHeader>
        <Heading size="md" textTransform="capitalize">
          {review.name}
        </Heading>
        <Text size="sm" textTransform="capitalize">
          {review.company}
        </Text>
      </CardHeader>
      <CardBody>
        <RatingShower value={review.rating} />
        <Heading size="md" mt={2}>
          {review.shortReview}
        </Heading>
        <Text fontSize="sm">{review.briefReview}</Text>
      </CardBody>
    </Card>
  );
};

export default UserReviewCard;

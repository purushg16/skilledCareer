import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import Review from "../../entities/review";
import RatingShower from "../Admin/Review/RatingShower";

const UserReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card w={300} minW={300}>
      <CardHeader>
        <Heading size="md" textTransform="capitalize">
          {review.name}
        </Heading>
        <Heading size="sm" textTransform="capitalize" color="gray">
          {review.company}
        </Heading>
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

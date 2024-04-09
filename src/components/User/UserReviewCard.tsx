import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import Review from "../../entities/review";
import RatingShower from "../Admin/Review/RatingShower";

const UserReviewCard = ({ review }: { review: Review }) => {
  return (
    <Card w={350} minW={350}>
      <CardHeader>
        <Heading size="md" textTransform="capitalize">
          {review.name}
        </Heading>
        <Heading size="md" textTransform="capitalize" color="gray">
          {review.company}
        </Heading>
      </CardHeader>
      <CardBody>
        <RatingShower value={review.rating} />
        <Heading size="md"> {review.shortReview} </Heading>
        {review.briefReview}
      </CardBody>
    </Card>
  );
};

export default UserReviewCard;

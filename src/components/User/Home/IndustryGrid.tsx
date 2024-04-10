import {
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useGetIndustries } from "../../../hooks/useGet";
import IndustryDecorCard from "./IndustryDecorCard";
import Taggie from "../Taggie";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const IndustryGrid = () => {
  const { data, isLoading, isSuccess } = useGetIndustries();

  return (
    <VStack align="start" w="100%" color="black" p={4} py={20} gap={8}>
      <Flex w="100%" align="end" flexWrap="wrap">
        <VStack align="start" gap={2}>
          <Taggie text="Build the future with us!" icon color="blue" />
          <Heading> Browse from top categories </Heading>
          <Text>Discover your favourite jobs from here!</Text>
        </VStack>
        <Spacer />
        <Link to="/jobs">
          <Button
            boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
            mt={8}
            w="max-content"
            rightIcon={<ArrowRightIcon />}
            bg="white"
            color="black"
            justifyContent="space-between"
            gap={4}
            borderRadius={3}
            _hover={{
              bg: "white",
              color: "black",
            }}
          >
            See all jobs
          </Button>
        </Link>
      </Flex>
      {isLoading && <Spinner />}
      <SimpleGrid w="100%" columns={{ base: 2, md: 4 }} spacing={4} mt={8}>
        {isSuccess &&
          data?.data
            .slice(0, 3)
            .map((indutry) => (
              <IndustryDecorCard key={indutry._id} indutry={indutry} />
            ))}
      </SimpleGrid>
    </VStack>
  );
};

export default IndustryGrid;

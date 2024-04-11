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
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { useGetIndustries } from "../../../hooks/useGet";
import Taggie from "../Taggie";
import IndustryDecorCard from "./IndustryDecorCard";
import WFHBanner from "./WFHBanner";

const IndustryGrid = () => {
  const { data, isLoading, isSuccess } = useGetIndustries();

  return (
    <VStack align="start" w="100%" color="black" p={4} py={20} gap={8}>
      <Flex w="100%" align="end" flexWrap="wrap">
        <VStack align="start" gap={2}>
          <Taggie text="Build the future with us!" icon color="blue" />
          <Heading> Browse from top categories </Heading>
          <Text>
            Discover a myriad of enticing job opportunities right at your
            fingertips!
          </Text>
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
      <SimpleGrid
        w="100%"
        columns={{ base: 1, md: 2 }}
        mt={8}
        spacing={8}
        spacingY={12}
      >
        <SimpleGrid w="100%" columns={{ base: 2, md: 3 }} spacing={4}>
          {isSuccess &&
            data?.data
              .slice(0, 4)
              .map((indutry) => (
                <IndustryDecorCard key={indutry._id} indutry={indutry} />
              ))}
        </SimpleGrid>
        <WFHBanner />
      </SimpleGrid>
    </VStack>
  );
};

export default IndustryGrid;

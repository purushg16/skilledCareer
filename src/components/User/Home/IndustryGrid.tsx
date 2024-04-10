import { Heading, SimpleGrid, Spinner, Tag, VStack } from "@chakra-ui/react";
import { useGetIndustries } from "../../../hooks/useGet";
import IndustryDecorCard from "./IndustryDecorCard";

const IndustryGrid = () => {
  const { data, isLoading, isSuccess } = useGetIndustries();

  return (
    <VStack w="100%" color="black" py={20}>
      <Tag borderRadius={3} colorScheme="blue">
        Build you future with us
      </Tag>
      <Heading> Browse from top categories </Heading>
      {isLoading && <Spinner />}
      <SimpleGrid
        w={{ base: "100%", md: "50%" }}
        columns={3}
        spacing={4}
        mt={8}
      >
        {isSuccess &&
          data?.data.slice(0, 3).map((indutry) => (
            <>
              <IndustryDecorCard key={indutry._id} indutry={indutry} />
              <IndustryDecorCard key={indutry._id} indutry={indutry} />
              <IndustryDecorCard key={indutry._id} indutry={indutry} />
            </>
          ))}
      </SimpleGrid>
    </VStack>
  );
};

export default IndustryGrid;

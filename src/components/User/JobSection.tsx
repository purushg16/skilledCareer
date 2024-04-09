import { Flex, Spinner, VStack } from "@chakra-ui/react";
import SnapContainer from "./SnapContainer";
import IndustryDecorCard from "./IndustryDecorCard";
import { ResponsiveHeader, ResponsiveText } from "./ResponsiveTypography";
import { useGetIndustries } from "../../hooks/useGet";

const JobSection = () => {
  const { data, isLoading, isSuccess } = useGetIndustries();

  return (
    <SnapContainer>
      <VStack gap={0} align="start">
        <ResponsiveHeader text="Discover your favourite jobs from here!" />
        <ResponsiveText text="Select from top indutries" />
      </VStack>
      {isLoading && <Spinner />}
      <Flex w="100%" maxW="100%" overflowX="scroll" gap={4}>
        {isSuccess &&
          data?.data
            .slice(0, 3)
            .map((indutry) => (
              <IndustryDecorCard key={indutry._id} indutry={indutry} />
            ))}
      </Flex>
    </SnapContainer>
  );
};

export default JobSection;

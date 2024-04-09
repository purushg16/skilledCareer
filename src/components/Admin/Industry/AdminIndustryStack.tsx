import {
  Flex,
  Heading,
  SimpleGrid,
  Spacer,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { useGetIndustries } from "../../../hooks/useGet";
import IndustryCard from "./IndustryCard";
import AddIndustryModal from "../AddIndustryModal";

const AdminIndustryStack = () => {
  const { data, isLoading } = useGetIndustries();

  return (
    <VStack align="start" gap={8}>
      <Flex w="100%" align="center">
        <Heading fontSize="xl"> All Industries </Heading>
        <Spacer />
        <AddIndustryModal small />
      </Flex>
      <SimpleGrid spacing={4} w="100%" maxW="100%">
        {isLoading && <Spinner />}
        {data && data.data.length === 0 && (
          <Heading fontSize="md"> No data found! </Heading>
        )}
        {data &&
          data?.data.map((industry) => (
            <IndustryCard industry={industry} key={industry._id} />
          ))}
      </SimpleGrid>
    </VStack>
  );
};

export default AdminIndustryStack;

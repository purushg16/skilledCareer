import { Heading, VStack } from "@chakra-ui/react";
import MinSalarySelector from "./Filter/MinSalarySelector";
import QualificationFilter from "./Filter/QualificationFilter";
import EmployementModeFilter from "./Filter/EmployementModeFilter";
import WorkQualificationFilter from "./Filter/WorkQualificationFilter";
import IndustryModal from "./Filter/IndustryModal";
import LocationFilter from "./Filter/LocationFilter";

const FilterSection = () => {
  return (
    <VStack
      align="start"
      gap={6}
      maxH={{ base: "max-content", md: "max-content", lg: 500 }}
      overflowY="auto"
      pb={20}
    >
      <Heading fontSize="lg">Filter by</Heading>

      <MinSalarySelector />
      <IndustryModal />
      <LocationFilter />
      <WorkQualificationFilter />
      <QualificationFilter />
      <EmployementModeFilter />
    </VStack>
  );
};

export default FilterSection;

import {
  Button,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EmployementModeSelector from "../../components/Admin/AddJob/EmployementModeSelector";
import { EmpployementTypeSelector } from "../../components/Admin/AddJob/EmployementTypeSelector";
import GenderSelector from "../../components/Admin/AddJob/GenderSelector";
import IndustrySelectorModal from "../../components/Admin/AddJob/IndustrySelectorModal";
import JobAddressAndLinkInput from "../../components/Admin/AddJob/JobAddressAndLinkInput";
import { JobInfoInput } from "../../components/Admin/AddJob/JobInfoInput";
import JobLocationPicker from "../../components/Admin/AddJob/JobLocationPicker";
import JobTimingPicker from "../../components/Admin/AddJob/JobTimingPicker";
import LanguagePreferencePicker from "../../components/Admin/AddJob/LanguagePreferencePicker";
import QualificationSelector from "../../components/Admin/AddJob/QualificationSelector";
import { RoleInput } from "../../components/Admin/AddJob/RoleInput";
import SalaryInput from "../../components/Admin/AddJob/SalaryInput";
import WorkQualificationSelector from "../../components/Admin/AddJob/WorkQualificationSelector";
import WorkingDaySelector from "../../components/Admin/AddJob/WorkingDaySelector";
import AddJobSubmitButton from "../../components/Admin/AddJob/AddJobSubmitButton";
import CompanyInput from "../../components/Admin/AddJob/CompanyInput";

export const AdminAddJobPage = () => {
  return (
    <VStack gap={8} align="start">
      <Heading> Add New Job </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacingX={12}
        spacingY={8}
        w="100%"
      >
        <GridItem>
          <VStack gap={8} align="start">
            <RoleInput />
            <JobInfoInput />
            <IndustrySelectorModal />
            <CompanyInput />
            <SalaryInput />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack gap={8}>
            <EmpployementTypeSelector />
            <EmployementModeSelector />
            <GenderSelector />
            <QualificationSelector />
            <WorkQualificationSelector />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack gap={8} align="start">
            <JobLocationPicker />
            <WorkingDaySelector />
            <JobTimingPicker />
            <JobAddressAndLinkInput />
          </VStack>
        </GridItem>
      </SimpleGrid>

      <LanguagePreferencePicker />
      <HStack justify="center" w="100%" pb={4}>
        <Link to="/admin">
          <Button> Cancel </Button>
        </Link>
        <AddJobSubmitButton />
      </HStack>
    </VStack>
  );
};

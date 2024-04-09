import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import CompanyInput from "../../components/Admin/AddJob/CompanyInput";
import EmployementModeSelector from "../../components/Admin/AddJob/EmployementModeSelector";
import { EmpployementTypeSelector } from "../../components/Admin/AddJob/EmployementTypeSelector";
import GenderSelector from "../../components/Admin/AddJob/GenderSelector";
import IndustrySelectorModal from "../../components/Admin/AddJob/IndustrySelectorModal";
import JobAddressAndLinkInput from "../../components/Admin/AddJob/JobAddressAndLinkInput";
import { JobInfoInput } from "../../components/Admin/AddJob/JobInfoInput";
import JobLocationPicker from "../../components/Admin/AddJob/JobLocationPicker";
import LanguagePreferencePicker from "../../components/Admin/AddJob/LanguagePreferencePicker";
import QualificationSelector from "../../components/Admin/AddJob/QualificationSelector";
import { RoleInput } from "../../components/Admin/AddJob/RoleInput";
import SalaryInput from "../../components/Admin/AddJob/SalaryInput";
import WorkQualificationSelector from "../../components/Admin/AddJob/WorkQualificationSelector";
import WorkingDaySelector from "../../components/Admin/AddJob/WorkingDaySelector";
import EditJobTimingPicker from "../../components/Admin/EditJob/EditJobTimingPicker";
import { useGetSingleJob } from "../../hooks/useGet";
import EditJobSubmitButton from "../../components/Admin/EditJob/EditJobSubmitButton";

const EditJobPage = () => {
  const jobId = useParams().jobId;
  const { isSuccess, isLoading } = useGetSingleJob(jobId!, !!jobId);

  if (isLoading) return <Spinner />;

  return (
    <VStack gap={8} align="start">
      <VStack align="start">
        <Link to="/admin">
          <Button size="sm" leftIcon={<ArrowBackIcon />}>
            All Jobs
          </Button>
        </Link>
        <Heading> Edit Job </Heading>
      </VStack>
      {!isSuccess && <Heading fontSize="lg"> No Job found </Heading>}

      {isSuccess && (
        <>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacingX={12}
            spacingY={8}
            w="100%"
          >
            <GridItem>
              <VStack gap={8} align="start">
                <RoleInput edit />
                <JobInfoInput edit />
                <IndustrySelectorModal edit />
                <CompanyInput edit />
                <SalaryInput edit />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack gap={8}>
                <EmpployementTypeSelector edit />
                <EmployementModeSelector edit />
                <GenderSelector edit />
                <QualificationSelector edit />
                <WorkQualificationSelector edit />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack gap={8} align="start">
                <JobLocationPicker edit />
                <WorkingDaySelector edit />
                <EditJobTimingPicker />
                <JobAddressAndLinkInput edit />
              </VStack>
            </GridItem>
          </SimpleGrid>

          <LanguagePreferencePicker edit />
          <HStack justify="center" w="100%" pb={4}>
            <Link to="/admin">
              <Button> Cancel </Button>
            </Link>
            <EditJobSubmitButton />
          </HStack>
        </>
      )}
    </VStack>
  );
};

export default EditJobPage;

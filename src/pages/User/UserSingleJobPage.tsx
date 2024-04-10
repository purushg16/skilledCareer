import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Link, useParams } from "react-router-dom";
import ThemeSwitcher from "../../components/ThemeSwitcher";
import JobApplyFooter from "../../components/User/JobApplyFooter";
import BasicInfoTile from "../../components/User/SingleJob/BasicInfoTile";
import JobHeader from "../../components/User/SingleJob/JobHeader";
import JobInfoTile from "../../components/User/SingleJob/JobInfoTile";
import { useGetSingleJob } from "../../hooks/useGet";
import LoadingPage from "../LoadingPage";

const UserSingleJobPage = () => {
  const jobId = useParams().id;

  const { data, isLoading } = useGetSingleJob(jobId!, !!jobId);

  if (isLoading) return <LoadingPage />;
  return (
    <Flex
      gap={8}
      flexDir="column"
      maxW={1100}
      m="auto"
      px={4}
      pos="relative"
      h="100vh"
      overflowY="auto"
      mb={8}
    >
      <Flex w="100%" align="baseline" py={4}>
        <Link to="/" style={{ marginBottom: "16px" }}>
          <Heading fontSize="xl"> SkilledCareer </Heading>
        </Link>
        <Spacer />
        <ThemeSwitcher />
      </Flex>
      <Link to="/jobs">
        <Button
          w="max-content"
          variant="text"
          leftIcon={<ArrowLeftIcon />}
          _hover={{
            borderBottom: "1px solid",
          }}
          borderRadius={0}
          p={0}
        >
          See all Jobs
        </Button>
      </Link>

      <Card>
        <CardBody p={8} as={VStack} align="start" gap={16}>
          <JobHeader job={data?.data} />
          <Divider />
          <VStack gap={8} align="start" w="100%">
            <BasicInfoTile job={data?.data} />
            <Divider />
            <JobInfoTile job={data?.data} />
            <Divider />
            <JobApplyFooter link={data?.data.jobApplyLink} />
          </VStack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default UserSingleJobPage;

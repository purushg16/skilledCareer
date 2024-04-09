import { Flex, Heading, Spacer, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import JobApplyFooter from "../../components/User/JobApplyFooter";
import { useGetSingleJob } from "../../hooks/useGet";
import JobHeader from "../../components/User/SingleJob/JobHeader";
import BasicInfoTile from "../../components/User/SingleJob/BasicInfoTile";
import JobInfoTile from "../../components/User/SingleJob/JobInfoTile";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../../components/ThemeSwitcher";

const UserSingleJobPage = () => {
  const jobId = useParams().id;

  const { data, isLoading } = useGetSingleJob(jobId!, !!jobId);

  if (isLoading) return <Spinner />;
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
    >
      <Flex w="100%">
        <Link to="/" style={{ marginBottom: "16px" }}>
          <Heading fontSize="xl"> SkilledCareer </Heading>
        </Link>
        <Spacer />
        <ThemeSwitcher />
      </Flex>
      <JobHeader job={data?.data} />
      <BasicInfoTile job={data?.data} />
      <JobInfoTile job={data?.data} />
      <JobApplyFooter link={data?.data.jobApplyLink} />
    </Flex>
  );
};

export default UserSingleJobPage;

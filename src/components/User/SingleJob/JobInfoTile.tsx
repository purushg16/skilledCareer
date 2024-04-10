import { Heading, Text, VStack } from "@chakra-ui/react";
import { Job } from "../../../entities/Job";

const JobInfoTile = ({ job }: { job: Job | undefined }) => {
  if (!job) return null;
  return (
    <VStack align="start" w="100%" gap={0}>
      <Heading fontSize="xl"> Job Information </Heading>
      <VStack align="start" gap={8} p={4} py={8}>
        <VStack gap={0} align="start">
          <Heading fontSize="lg"> Job Info </Heading>
          <Text fontSize="sm"> {job.jobInfo} </Text>
        </VStack>
        <VStack gap={0} align="start">
          <Heading fontSize="lg"> Job Timings </Heading>
          <Text fontSize="sm">
            {job.jobTimings} | {job.workingDays}
          </Text>
        </VStack>
        <VStack gap={0} align="start">
          <Heading fontSize="lg"> Job Address </Heading>
          <Text fontSize="sm"> {job.jobAddress} </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default JobInfoTile;

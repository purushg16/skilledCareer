import {
  Button,
  Card,
  CardBody,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Job } from "../../../entities/Job";

const JobInfoTile = ({ job }: { job: Job | undefined }) => {
  if (!job) return null;
  return (
    <VStack align="start" w="100%" gap={0}>
      <Button borderBottomRadius={0}> Job Information </Button>
      <Card w="100%" borderTopRadius={0}>
        <CardBody>
          <VStack align="start" gap={8}>
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
        </CardBody>
      </Card>
    </VStack>
  );
};

export default JobInfoTile;

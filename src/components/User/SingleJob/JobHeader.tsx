import { Button, Divider, HStack, Heading, VStack } from "@chakra-ui/react";
import { Job } from "../../../entities/Job";
import { ArchiveIcon, GlobeIcon, StarIcon } from "@radix-ui/react-icons";

const JobHeader = ({ job }: { job: Job | undefined }) => {
  if (!job) return null;

  return (
    <VStack align="start" gap={4}>
      <HStack>
        <Button
          size="xs"
          borderRadius={20}
          leftIcon={<StarIcon />}
          variant="outline"
          colorScheme="blue"
        >
          {job.noOfViews} views
        </Button>
        {job.workQualification.map((wq) => (
          <Button
            size="xs"
            textTransform="capitalize"
            key={wq}
            variant="outline"
            colorScheme={wq === "fresher" ? "blue" : "gray"}
            borderRadius={20}
          >
            {job.workQualification}
          </Button>
        ))}
      </HStack>
      <VStack align="start">
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          {job.role}
        </Heading>
        <HStack>
          <Button
            textTransform="capitalize"
            variant="text"
            leftIcon={<ArchiveIcon />}
            px={0}
            size="sm"
          >
            {job.company}
          </Button>
          <Divider orientation="vertical" />
          <Button
            textTransform="capitalize"
            variant="text"
            leftIcon={<GlobeIcon />}
            px={0}
            size="sm"
            gap={0}
          >
            {job.location}
          </Button>
        </HStack>
      </VStack>

      <HStack>
        <Button colorScheme="gray" size="xs" textTransform="capitalize">
          {job.industry}
        </Button>
        <Button colorScheme="gray" size="xs" textTransform="capitalize">
          {job.employmentType}
        </Button>
        <Button colorScheme="gray" size="xs" textTransform="capitalize">
          {job.employmentMode}
        </Button>
      </HStack>
    </VStack>
  );
};

export default JobHeader;

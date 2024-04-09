import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Spacer,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ClockIcon,
  LightningBoltIcon,
  PersonIcon,
  SewingPinIcon,
  SketchLogoIcon,
  SpeakerLoudIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import DateFormatter from "../../functions/dateFormatter";
import { Job } from "../../entities/Job";
import { useLongPress } from "use-long-press";
import DeleteAlertDialog from "./DeleteAlertDialog";

export const JobCard = ({ job }: { job: Job }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onLongPress = useLongPress(() => {
    onOpen();
  });

  return (
    <Box {...onLongPress()}>
      <Card
        onClick={() => navigate(`/admin/editJob/${job._id}`)}
        transition="all 0.5s"
        _hover={{
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
      >
        <CardBody>
          <Flex
            cursor="pointer"
            flexDir="column"
            gap={4}
            align="start"
            borderRadius={5}
          >
            <Flex w="100%" align="center">
              <Button
                textTransform="capitalize"
                colorScheme="blue"
                leftIcon={<StarIcon />}
                variant="outline"
                borderRadius={20}
                size="xs"
              >
                {job.noOfViews} views
              </Button>
              <Spacer />
              <Tag variant="solid" colorScheme="blue">
                <TagLeftIcon boxSize="12px" as={ClockIcon} />
                <TagLabel> {DateFormatter(job.postedOn!)} </TagLabel>
              </Tag>
            </Flex>

            <VStack align="start" gap={0}>
              <Text fontSize="sm">{job.company}</Text>
              <Heading fontSize="md">{job.role}</Heading>
              <Text fontSize="sm">{job.industry}</Text>
            </VStack>

            <Flex w="100%" flexWrap="wrap" gap={4}>
              <Button
                textTransform="capitalize"
                colorScheme="blue"
                size="sm"
                leftIcon={<SketchLogoIcon />}
              >
                {job.minSalary} - {job.maxSalary} / Month
              </Button>
              {job.workQualification &&
                job.workQualification.includes("experianced") && (
                  <Button
                    textTransform="capitalize"
                    variant="outline"
                    colorScheme="blue"
                    size="sm"
                    leftIcon={<LightningBoltIcon />}
                  >
                    {job.experienceInYears} Years
                  </Button>
                )}
              <Button
                textTransform="capitalize"
                variant="outline"
                colorScheme="blue"
                size="sm"
                leftIcon={<PersonIcon />}
              >
                {job.qualification}
                {job.genderPreference.map((gender) => (
                  <>/{gender}</>
                ))}
              </Button>
              <Button
                textTransform="capitalize"
                variant="outline"
                colorScheme="blue"
                size="sm"
                leftIcon={<SewingPinIcon />}
              >
                {job.location}
              </Button>
              {job.languagePreference && job.languagePreference.length > 0 && (
                <Button
                  textTransform="capitalize"
                  variant="outline"
                  colorScheme="blue"
                  size="sm"
                  leftIcon={<SpeakerLoudIcon />}
                >
                  {job.languagePreference.map((lang, i) => (
                    <>
                      {lang}
                      {i + 1 !== job.languagePreference.length && ","}{" "}
                    </>
                  ))}
                </Button>
              )}
            </Flex>
          </Flex>
        </CardBody>
      </Card>
      <DeleteAlertDialog
        isOpen={isOpen}
        onClose={onClose}
        heading="Job"
        field="job"
        jobId={job._id}
      />
    </Box>
  );
};

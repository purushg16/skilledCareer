import { Button, Card, CardBody, VStack } from "@chakra-ui/react";
import { Job } from "../../../entities/Job";
import {
  BackpackIcon,
  DashboardIcon,
  PersonIcon,
  SketchLogoIcon,
  SpeakerLoudIcon,
} from "@radix-ui/react-icons";

const BasicInfoTile = ({ job }: { job: Job | undefined }) => {
  if (!job) return null;
  return (
    <VStack align="start" w="100%" gap={0}>
      <Button borderBottomRadius={0}> Basic Information </Button>
      <Card w="100%" borderTopRadius={0}>
        <CardBody>
          <VStack align="start" gap={4}>
            <Button
              textTransform="capitalize"
              variant="text"
              leftIcon={<DashboardIcon />}
            >
              {job.workingDays}
            </Button>
            <Button variant="text" leftIcon={<SketchLogoIcon />}>
              {job.minSalary} - {job.maxSalary}/monthly
            </Button>
            {job.experienceInYears && job.experienceInYears > 0 && (
              <Button variant="text" leftIcon={<BackpackIcon />}>
                {job.experienceInYears} Years Experience
              </Button>
            )}
            <Button
              variant="text"
              leftIcon={<PersonIcon />}
              textTransform="capitalize"
            >
              {job.qualification}/{job.genderPreference}
            </Button>
            {job.languagePreference && job.languagePreference.length > 0 && (
              <Button
                variant="text"
                leftIcon={<SpeakerLoudIcon />}
                textTransform="capitalize"
              >
                {job.languagePreference.map((lang, i) => (
                  <>
                    {lang}
                    {i + 1 !== job.languagePreference.length && ","}{" "}
                  </>
                ))}
              </Button>
            )}
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default BasicInfoTile;

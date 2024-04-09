import { Button, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { BackpackIcon } from "@radix-ui/react-icons";
import useJobQueryStore from "../../../store/jobQueryStore";

const WorkQualificationFilter = () => {
  const workQualification = useJobQueryStore((s) => s.workQualification);
  const setWorkQualification = useJobQueryStore((s) => s.setWorkQualification);

  return (
    <VStack gap={4} align="start">
      <Button
        size="sm"
        variant="link"
        leftIcon={<BackpackIcon />}
        opacity={0.7}
      >
        Work Qualification
      </Button>
      <RadioGroup value={workQualification} onChange={setWorkQualification}>
        <VStack align="start">
          <Radio value="experienced" size="sm">
            Experienced
          </Radio>
          <Radio value="fresher" size="sm">
            Fresher
          </Radio>
        </VStack>
      </RadioGroup>
    </VStack>
  );
};

export default WorkQualificationFilter;

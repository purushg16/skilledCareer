import { Button, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import { PersonIcon } from "@radix-ui/react-icons";
import useJobQueryStore from "../../../store/jobQueryStore";

const QualificationFilter = () => {
  const qualification = useJobQueryStore((s) => s.qualification);
  const setQualification = useJobQueryStore((s) => s.setQualification);

  return (
    <VStack gap={4} align="start">
      <Button size="sm" variant="link" leftIcon={<PersonIcon />} opacity={0.7}>
        Qualification
      </Button>
      <RadioGroup value={qualification} onChange={setQualification}>
        <VStack align="start">
          <Radio size="sm" value="below-10th">
            {" "}
            Below 10th{" "}
          </Radio>
          <Radio size="sm" value="10th">
            {" "}
            10th{" "}
          </Radio>
          <Radio size="sm" value="12th">
            {" "}
            12th{" "}
          </Radio>
          <Radio size="sm" value="graduate">
            {" "}
            graduate{" "}
          </Radio>
        </VStack>
      </RadioGroup>
    </VStack>
  );
};

export default QualificationFilter;

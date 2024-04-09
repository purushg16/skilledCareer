import { Button, Checkbox, VStack } from "@chakra-ui/react";
import { HomeIcon } from "@radix-ui/react-icons";
import useJobQueryStore from "../../../store/jobQueryStore";

const EmployementModeFilter = () => {
  const employmentMode = useJobQueryStore((s) => s.employmentMode);
  const setEmploymentMode = useJobQueryStore((s) => s.setEmploymentMode);

  return (
    <VStack gap={4} align="start">
      <Button size="sm" variant="link" leftIcon={<HomeIcon />} opacity={0.7}>
        Employment Mode
      </Button>
      <VStack align="start">
        <Checkbox
          size="sm"
          isChecked={employmentMode.includes("work from office")}
          onChange={() => setEmploymentMode("work from office")}
        >
          Work From Office
        </Checkbox>
        <Checkbox
          size="sm"
          isChecked={employmentMode.includes("work from home")}
          onChange={() => setEmploymentMode("work from home")}
        >
          Work From Home
        </Checkbox>
        <Checkbox
          size="sm"
          isChecked={employmentMode.includes("hybrid")}
          onChange={() => setEmploymentMode("hybrid")}
        >
          Hybrid
        </Checkbox>
      </VStack>
    </VStack>
  );
};

export default EmployementModeFilter;

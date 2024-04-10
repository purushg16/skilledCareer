import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { CheckCircledIcon, StarIcon } from "@radix-ui/react-icons";
import useJobQueryStore from "../../../store/jobQueryStore";
import { useState } from "react";

const MinSalarySelector = () => {
  const setMinSalary = useJobQueryStore((s) => s.setMinSalary);
  const [salary, setSalary] = useState<number>();

  return (
    <VStack align="start" w="100%" gap={4}>
      <Button size="sm" variant="link" leftIcon={<StarIcon />} opacity={0.7}>
        Minimum Salary
      </Button>
      <InputGroup size="sm">
        <Input
          size="sm"
          type="number"
          placeholder="Min. Salary"
          value={salary}
          onChange={(e) => setSalary(parseInt(e.target.value || ""))}
        />
        <InputRightElement>
          <IconButton
            colorScheme="blue"
            size="sm"
            borderRadius={0}
            icon={<CheckCircledIcon />}
            aria-label="add"
            onClick={() => salary && setMinSalary(salary)}
          />
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
};

export default MinSalarySelector;

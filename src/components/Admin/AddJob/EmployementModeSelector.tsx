import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import useEditJobStore from "../../../store/editJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";

const EmployementModeSelector = ({ edit }: EditJobInputProps) => {
  const value = useAddJobStore((s) => s.employmentMode);
  const setValue = useAddJobStore((s) => s.setEmploymentMode);

  const editValue = useEditJobStore((s) => s.employmentMode);
  const setEditValue = useEditJobStore((s) => s.setEmploymentMode);

  return (
    <FormControl>
      <FormLabel> Employement Mode </FormLabel>
      <RadioGroup
        onChange={edit ? setEditValue : setValue}
        value={edit ? editValue : value}
      >
        <Stack direction="row" gap={4}>
          <Radio value="work from home"> Work From Home </Radio>
          <Radio value="work from office"> Work From Office </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

export default EmployementModeSelector;

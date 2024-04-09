import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Stack } from "@chakra-ui/layout";
import { RadioGroup, Radio } from "@chakra-ui/radio";
import useAddJobStore from "../../../store/addJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";

export const EmpployementTypeSelector = ({ edit }: EditJobInputProps) => {
  const value = useAddJobStore((s) => s.employmentType);
  const setValue = useAddJobStore((s) => s.setEmploymentType);

  const editValue = useEditJobStore((s) => s.employmentType);
  const setEditValue = useEditJobStore((s) => s.setEmploymentType);

  return (
    <FormControl>
      <FormLabel> Employement Type </FormLabel>
      <RadioGroup
        onChange={edit ? setEditValue : setValue}
        value={edit ? editValue : value}
      >
        <Stack direction="row" gap={4}>
          <Radio value="part time"> Part Time </Radio>
          <Radio value="full time"> Full Time </Radio>
        </Stack>
      </RadioGroup>
    </FormControl>
  );
};

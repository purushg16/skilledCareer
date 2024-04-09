import {
  FormControl,
  FormLabel,
  RadioGroup,
  VStack,
  Radio,
} from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";

const QualificationSelector = ({ edit }: EditJobInputProps) => {
  const value = useAddJobStore((s) => s.qualification);
  const setValue = useAddJobStore((s) => s.setQualification);

  const editValue = useEditJobStore((s) => s.qualification);
  const setEditValue = useEditJobStore((s) => s.setQualification);

  return (
    <FormControl>
      <FormLabel> Qualification </FormLabel>

      <RadioGroup
        onChange={edit ? setEditValue : setValue}
        value={edit ? editValue : value}
      >
        <VStack align="start" gap={2}>
          <Radio value="below-10th"> Below-10th </Radio>
          <Radio value="10th"> 10th </Radio>
          <Radio value="12th"> 12th </Radio>
          <Radio value="graduate"> Graduate </Radio>
        </VStack>
      </RadioGroup>
    </FormControl>
  );
};

export default QualificationSelector;

import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import useEditJobStore from "../../../store/editJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";

const CompanyInput = ({ edit }: EditJobInputProps) => {
  const value = useAddJobStore((s) => s.company);
  const setValue = useAddJobStore((s) => s.setCompany);

  const editValue = useEditJobStore((s) => s.company);
  const setEditValue = useEditJobStore((s) => s.setCompany);

  return (
    <FormControl>
      <FormLabel> Company </FormLabel>
      <Input
        placeholder="Company"
        value={edit ? editValue : value}
        variant="filled"
        onChange={(e) => {
          edit ? setEditValue(e.target.value) : setValue(e.target.value);
        }}
      />
    </FormControl>
  );
};

export default CompanyInput;

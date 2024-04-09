import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/textarea";
import useAddJobStore from "../../../store/addJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";

export const JobInfoInput = ({ edit }: EditJobInputProps) => {
  const value = useAddJobStore((s) => s.jobInfo);
  const setValue = useAddJobStore((s) => s.setJobInfo);

  const editValue = useEditJobStore((s) => s.jobInfo);
  const setEditInfo = useEditJobStore((s) => s.setJobInfo);

  return (
    <FormControl>
      <FormLabel> Job Info </FormLabel>
      <Textarea
        variant="filled"
        placeholder="Job Info"
        value={edit ? editValue : value}
        onChange={(e) => {
          edit ? setEditInfo(e.target.value) : setValue(e.target.value);
        }}
      />
    </FormControl>
  );
};

import { FormControl, FormLabel, Stack, Checkbox } from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import useEditJobStore from "../../../store/editJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";

const GenderSelector = ({ edit }: EditJobInputProps) => {
  const setValue = useAddJobStore((s) => s.setGenderPreference);
  const maleChecked = useEditJobStore((s) => s.genderPreference).includes(
    "male"
  );
  const femaleChecked = useEditJobStore((s) => s.genderPreference).includes(
    "female"
  );
  const setEditValue = useEditJobStore((s) => s.setGenderPreference);

  return (
    <FormControl>
      <FormLabel>Employement Mode </FormLabel>

      <Stack spacing={5} direction="row">
        <Checkbox
          defaultChecked={edit && maleChecked ? true : false}
          onChange={() => (edit ? setEditValue("male") : setValue("male"))}
        >
          Male
        </Checkbox>
        <Checkbox
          defaultChecked={edit && femaleChecked ? true : false}
          onChange={() => (edit ? setEditValue("female") : setValue("female"))}
        >
          Female
        </Checkbox>
      </Stack>
    </FormControl>
  );
};

export default GenderSelector;

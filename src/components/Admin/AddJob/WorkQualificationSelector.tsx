import {
  FormControl,
  FormLabel,
  Stack,
  Checkbox,
  Input,
} from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";

const WorkQualificationSelector = ({ edit }: EditJobInputProps) => {
  const qualifications = useAddJobStore((s) => s.workQualification);
  const set = useAddJobStore((s) => s.setWorkQualification);

  const editQualifications = useEditJobStore((s) => s.workQualification);
  const editSet = useEditJobStore((s) => s.setWorkQualification);

  const value = useAddJobStore((s) => s.experienceInYears);
  const setValue = useAddJobStore((s) => s.setExperienceInYears);

  const editValue = useEditJobStore((s) => s.experienceInYears);
  const setEditValue = useEditJobStore((s) => s.setExperienceInYears);

  return (
    <>
      <FormControl>
        <FormLabel> Work Qualification </FormLabel>

        <Stack spacing={4} direction="row">
          <Checkbox
            defaultChecked={
              edit && editQualifications.includes("experienced") ? true : false
            }
            onChange={() => {
              if (edit) {
                editSet("experienced");
                setEditValue(parseInt(""));
              } else {
                set("experienced");
                setValue(parseInt(""));
              }
            }}
          >
            Experianced
          </Checkbox>
          <Checkbox
            onChange={() => (edit ? editSet("fresher") : set("fresher"))}
          >
            Fresher
          </Checkbox>
        </Stack>
      </FormControl>

      <FormControl
        opacity={
          edit
            ? editQualifications.includes("experienced")
              ? 1
              : 0.5
            : qualifications.includes("experienced")
            ? 1
            : 0.5
        }
      >
        <FormLabel> Experience (in Years) </FormLabel>
        <Input
          placeholder="Experience In Years"
          variant="filled"
          type="number"
          value={edit ? editValue : value}
          onChange={(e) =>
            edit
              ? setEditValue(parseInt(e.target.value || ""))
              : setValue(parseInt(e.target.value || ""))
          }
          isDisabled={
            edit
              ? !editQualifications.includes("experienced")
              : !qualifications.includes("experienced")
          }
        />
      </FormControl>
    </>
  );
};

export default WorkQualificationSelector;

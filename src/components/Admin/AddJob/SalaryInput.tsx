import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import useEditJobStore from "../../../store/editJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";

const SalaryInput = ({ edit }: EditJobInputProps) => {
  const minSalary = useAddJobStore((s) => s.minSalary);
  const setMinSalary = useAddJobStore((s) => s.setMinSalary);
  const setMaxSalary = useAddJobStore((s) => s.setMaxSalary);
  const maxSalary = useAddJobStore((s) => s.maxSalary);

  const editminSalary = useEditJobStore((s) => s.minSalary);
  const editmaxSalary = useEditJobStore((s) => s.maxSalary);
  const seteditMinSalary = useEditJobStore((s) => s.setMinSalary);
  const seteditMaxSalary = useEditJobStore((s) => s.setMaxSalary);

  return (
    <>
      <FormControl>
        <FormLabel> Min. Salary </FormLabel>
        <Input
          value={edit ? editminSalary : minSalary}
          onChange={(e) =>
            edit
              ? seteditMinSalary(parseInt(e.target.value || ""))
              : setMinSalary(parseInt(e.target.value || ""))
          }
          type="number"
          variant="filled"
          placeholder="Min. Salary"
        />
      </FormControl>
      <FormControl>
        <FormLabel> Max. Salary </FormLabel>
        <Input
          value={edit ? editmaxSalary : maxSalary}
          onChange={(e) =>
            edit
              ? seteditMaxSalary(parseInt(e.target.value || ""))
              : setMaxSalary(parseInt(e.target.value || ""))
          }
          type="number"
          variant="filled"
          placeholder="Max. Salary"
        />
      </FormControl>
    </>
  );
};

export default SalaryInput;

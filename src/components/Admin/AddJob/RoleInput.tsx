import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import useAddJobStore from "../../../store/addJobStore";
import useEditJobStore from "../../../store/editJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";

export const RoleInput = ({ edit }: EditJobInputProps) => {
  const role = useAddJobStore((s) => s.role);
  const setRole = useAddJobStore((s) => s.setRole);

  const editRole = useEditJobStore((s) => s.role);
  const setEditRole = useEditJobStore((s) => s.setRole);

  return (
    <FormControl>
      <FormLabel>Role</FormLabel>
      <Input
        variant="filled"
        value={edit ? editRole : role}
        onChange={(e) => {
          if (edit) setEditRole(e.target.value);
          else setRole(e.target.value);
        }}
        placeholder="Role"
      />
    </FormControl>
  );
};

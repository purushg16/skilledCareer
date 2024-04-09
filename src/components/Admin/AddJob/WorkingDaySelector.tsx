import {
  FormControl,
  FormLabel,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import useEditJobStore from "../../../store/editJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WorkingDaySelector = ({ edit }: EditJobInputProps) => {
  const workingDays = useAddJobStore((s) => s.workingDays);
  const setWorkingDays = useAddJobStore((s) => s.setWorkingDays);

  const editWorkingDays = useEditJobStore((s) => s.workingDays).replace(
    "to",
    "-"
  );
  const setEditWorkingDays = useEditJobStore((s) => s.setWorkingDays);

  return (
    <FormControl>
      <FormLabel> Working Days </FormLabel>
      <VStack gap={4}>
        <Menu>
          {!edit ? (
            <MenuButton
              as={Button}
              w="100%"
              textAlign="left"
              colorScheme={
                workingDays.length > 3 && workingDays.split("-")[0] !== " "
                  ? "blue"
                  : "gray"
              }
            >
              {workingDays.length > 3 && workingDays.split("-")[0] !== " "
                ? workingDays.split("-")[0]
                : "From"}
            </MenuButton>
          ) : (
            <MenuButton
              as={Button}
              w="100%"
              textAlign="left"
              colorScheme={
                editWorkingDays.length > 3 &&
                editWorkingDays.split("-")[0] !== " "
                  ? "blue"
                  : "gray"
              }
            >
              {editWorkingDays.length > 3 &&
              editWorkingDays.split("-")[0] !== " "
                ? editWorkingDays.split("-")[0]
                : "From"}
            </MenuButton>
          )}
          <MenuList>
            {days.map((day) => (
              <MenuItem
                key={day}
                onClick={() =>
                  edit
                    ? setEditWorkingDays(day, true)
                    : setWorkingDays(day, true)
                }
              >
                {day}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          {!edit ? (
            <MenuButton
              as={Button}
              w="100%"
              textAlign="left"
              colorScheme={
                workingDays.length > 3 && workingDays.split("-")[1] !== " "
                  ? "blue"
                  : "gray"
              }
            >
              {workingDays.length > 3 && workingDays.split("-")[1] !== " "
                ? workingDays.split("-")[1]
                : "To"}
            </MenuButton>
          ) : (
            <MenuButton
              as={Button}
              w="100%"
              textAlign="left"
              colorScheme={
                editWorkingDays.length > 3 &&
                editWorkingDays.split("-")[1] !== " "
                  ? "blue"
                  : "gray"
              }
            >
              {editWorkingDays.length > 3 &&
              editWorkingDays.split("-")[1] !== " "
                ? editWorkingDays.split("-")[1]
                : "To"}
            </MenuButton>
          )}
          <MenuList>
            {days.map((day) => (
              <MenuItem
                key={day}
                onClick={() =>
                  edit
                    ? setEditWorkingDays(day, false)
                    : setWorkingDays(day, false)
                }
              >
                {day}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </VStack>
    </FormControl>
  );
};

export default WorkingDaySelector;

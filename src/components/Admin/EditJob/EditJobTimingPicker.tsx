import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import useEditJobStore from "../../../store/editJobStore";

const hoursList = [
  "12",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
];

const minuteList = [
  "00",
  "05",
  "10",
  "15",
  "20",
  "25",
  "30",
  "35",
  "40",
  "45",
  "50",
  "55",
];

const EditJobTimingPicker = () => {
  const setJobTimings = useEditJobStore((s) => s.setJobTimings);
  const jobTimings = useEditJobStore((s) => s.jobTimings);

  const storeStart = jobTimings.split("to")[0];
  const storeEnd = jobTimings.split("to")[1];
  const storeStartHours =
    parseInt(storeStart.split(":")[0]) <= 9
      ? `0${storeStart.split(":")[0].replace("0", "").trim()}`
      : storeStart.split(":")[0].trim();

  const storeEndHours =
    parseInt(storeEnd.split(":")[0]) <= 9
      ? `0${storeEnd.split(":")[0].replace("0", "").trim()}`
      : storeEnd.split(":")[0].trim();

  const storeStartMinutes = storeStart.split(":")[1].substring(0, 2).trim();
  const storeEndMinutes = storeEnd.split(":")[1].substring(0, 2).trim();

  const storeStartShift = storeStart.includes("AM") ? "AM" : "PM";
  const storeEndShift = storeEnd.includes("AM") ? "AM" : "PM";

  const [startHours, setStartHours] = useState<string>(storeStartHours);
  const [startMinutes, setStartMinutes] = useState<string>(storeStartMinutes);
  const [startShift, setStartShift] = useState<"AM" | "PM" | "" | string>(
    storeStartShift
  );

  const [endHours, setEndHours] = useState<string>(storeEndHours);
  const [endMinutes, setEndMinutes] = useState<string>(storeEndMinutes);
  const [endShift, setEndShift] = useState<"AM" | "PM" | "" | string>(
    storeEndShift
  );

  return (
    <FormControl>
      <FormLabel> Job Timings </FormLabel>
      <VStack gap={4} align="start" w="100%">
        <Box w="100%">
          <Text fontSize="xs"> Start-Time </Text>
          <HStack w="100%">
            <Menu>
              <MenuButton as={Button}>{storeStartHours || "Hours"}</MenuButton>
              <MenuList maxH={300} overflowY="auto">
                {hoursList.map((hour) => (
                  <MenuItem
                    key={hour}
                    onClick={() => {
                      setStartHours(hour);
                      setJobTimings(
                        `${hour}:${startMinutes} ${startShift}`,
                        true
                      );
                    }}
                  >
                    {hour}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button}>
                {storeStartMinutes || "Minutes"}
              </MenuButton>
              <MenuList maxH={350} overflowY="auto">
                {minuteList.map((minute) => (
                  <MenuItem
                    key={minute}
                    onClick={() => {
                      setStartMinutes(minute);
                      setJobTimings(
                        `${startHours}:${minute} ${startShift}`,
                        true
                      );
                    }}
                  >
                    {minute}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} textTransform="uppercase">
                {storeStartShift || "AM/PM"}
              </MenuButton>
              <MenuList maxH={350} overflowY="auto">
                <MenuItem
                  onClick={() => {
                    setStartShift("AM");
                    setJobTimings(`${startHours}:${startMinutes} AM`, true);
                  }}
                >
                  AM
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setStartShift("PM");
                    setJobTimings(`${startHours}:${startMinutes} PM`, true);
                  }}
                >
                  PM
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>

        <Box w="100%">
          <Text fontSize="xs"> End-Time </Text>
          <HStack w="100%">
            <Menu>
              <MenuButton as={Button}>{storeEndHours || "Hours"}</MenuButton>
              <MenuList maxH={300} overflowY="auto">
                {hoursList.map((hour) => (
                  <MenuItem
                    key={hour}
                    onClick={() => {
                      setEndHours(hour);
                      setJobTimings(`${hour}:${endMinutes} ${endShift}`, false);
                    }}
                  >
                    {hour}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button}>
                {storeEndMinutes || "Minutes"}
              </MenuButton>
              <MenuList maxH={350} overflowY="auto">
                {minuteList.map((minute) => (
                  <MenuItem
                    key={minute}
                    onClick={() => {
                      setEndMinutes(minute);
                      setJobTimings(`${endHours}:${minute} ${endShift}`, false);
                    }}
                  >
                    {minute}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} textTransform="uppercase">
                {storeEndShift || "AM/PM"}
              </MenuButton>
              <MenuList maxH={350} overflowY="auto">
                <MenuItem
                  onClick={() => {
                    setEndShift("AM");
                    setJobTimings(`${endHours}:${endMinutes} AM`, false);
                  }}
                >
                  AM
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setEndShift("PM");
                    setJobTimings(`${endHours}:${endMinutes} PM`, false);
                  }}
                >
                  PM
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default EditJobTimingPicker;

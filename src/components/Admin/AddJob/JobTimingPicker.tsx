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
import { useEffect, useState } from "react";
import useAddJobStore from "../../../store/addJobStore";

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

const JobTimingPicker = () => {
  const setJobTimings = useAddJobStore((s) => s.setJobTimings);

  const [startHours, setStartHours] = useState<string>("");
  const [startMinutes, setStartMinutes] = useState<string>("");
  const [startShift, setStartShift] = useState<"AM" | "PM" | "">("");

  const [endHours, setEndHours] = useState<string>("");
  const [endMinutes, setEndMinutes] = useState<string>("");
  const [endShift, setEndShift] = useState<"AM" | "PM" | "">("");

  useEffect(() => {
    setJobTimings(`${startHours}:${startMinutes} ${startShift}`, true);
  }, [startHours, startMinutes, startShift, setJobTimings]);

  useEffect(() => {
    setJobTimings(`${endHours}:${endMinutes} ${endShift}`, false);
  }, [endHours, endMinutes, endShift, setJobTimings]);

  return (
    <FormControl>
      <FormLabel> Job Timings </FormLabel>
      <VStack gap={4} align="start" w="100%">
        <Box w="100%">
          <Text fontSize="xs"> Start-Time </Text>
          <HStack w="100%">
            <Menu>
              <MenuButton as={Button}>{startHours || "Hours"}</MenuButton>
              <MenuList maxH={300} overflowY="auto">
                {hoursList.map((hour) => (
                  <MenuItem key={hour} onClick={() => setStartHours(hour)}>
                    {hour}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button}>{startMinutes || "Minutes"}</MenuButton>
              <MenuList maxH={350} overflowY="auto">
                {minuteList.map((minute) => (
                  <MenuItem
                    key={minute}
                    onClick={() => setStartMinutes(minute)}
                  >
                    {minute}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} textTransform="uppercase">
                {startShift || "AM/PM"}
              </MenuButton>
              <MenuList maxH={350} overflowY="auto">
                <MenuItem onClick={() => setStartShift("AM")}> AM </MenuItem>
                <MenuItem onClick={() => setStartShift("PM")}> PM </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>

        <Box w="100%">
          <Text fontSize="xs"> Start-Time </Text>
          <HStack w="100%">
            <Menu>
              <MenuButton as={Button}>{endHours || "Hours"}</MenuButton>
              <MenuList maxH={300} overflowY="auto">
                {hoursList.map((hour) => (
                  <MenuItem key={hour} onClick={() => setEndHours(hour)}>
                    {hour}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button}>{endMinutes || "Minutes"}</MenuButton>
              <MenuList maxH={350} overflowY="auto">
                {minuteList.map((minute) => (
                  <MenuItem key={minute} onClick={() => setEndMinutes(minute)}>
                    {minute}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} textTransform="uppercase">
                {endShift || "AM/PM"}
              </MenuButton>
              <MenuList maxH={350} overflowY="auto">
                <MenuItem onClick={() => setEndShift("AM")}> AM </MenuItem>
                <MenuItem onClick={() => setEndShift("PM")}> PM </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default JobTimingPicker;

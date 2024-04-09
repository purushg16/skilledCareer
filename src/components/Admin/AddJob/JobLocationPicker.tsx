import { useState } from "react";
import { FormControl, FormLabel, Button, Input, Box } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import useAddJobStore from "../../../store/addJobStore";
import { City } from "country-state-city";
import { FixedSizeList as List } from "react-window";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";

const JobLocationPicker = ({ edit }: EditJobInputProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useAddJobStore((s) => s.location);
  const setLocation = useAddJobStore((s) => s.setLocation);

  const editLocation = useEditJobStore((s) => s.location);
  const setEditLocation = useEditJobStore((s) => s.setLocation);

  const cities = City.getCitiesOfCountry("IN")?.map((c) => c.name);
  const [searchValue, setSearchValue] = useState<string>("");

  const filteredCities: string[] =
    cities && searchValue
      ? cities.filter((city: string) =>
          city.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

  const Row = ({
    index,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
  }) => (
    <Box style={style} my={4} w="100%">
      <Button
        w="100%"
        colorScheme={
          (!edit && filteredCities[index] === location) ||
          (edit && filteredCities[index] === editLocation)
            ? "blue"
            : "gray"
        }
        onClick={() =>
          edit
            ? setEditLocation(filteredCities[index])
            : setLocation(filteredCities[index])
        }
      >
        {filteredCities[index]}
      </Button>
    </Box>
  );

  return (
    <>
      <FormControl>
        <FormLabel> Location </FormLabel>
        <Button
          onClick={onOpen}
          w="100%"
          justifyContent="left"
          textTransform="capitalize"
        >
          {!edit
            ? location !== ""
              ? location
              : "Select Location"
            : editLocation !== ""
            ? editLocation
            : "Select Location"}
        </Button>
      </FormControl>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={{ base: "full", md: "xl" }}
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform="capitalize">
            {!edit
              ? location !== ""
                ? location
                : "Select Location"
              : editLocation !== ""
              ? editLocation
              : "Select Location"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={8}>
            <Input
              name="location"
              size={{ base: "sm", md: "md" }}
              variant="flushed"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {filteredCities.length > 0 && (
              <Box w="100%" maxH={500} overflowY="auto">
                <List
                  height={400}
                  itemCount={filteredCities.length}
                  itemSize={50}
                  width="100%"
                >
                  {Row}
                </List>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default JobLocationPicker;

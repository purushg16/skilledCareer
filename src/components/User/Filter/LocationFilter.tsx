import {
  Box,
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";
import { GlobeIcon } from "@radix-ui/react-icons";
import { City } from "country-state-city";
import { useState } from "react";
import { FixedSizeList as List } from "react-window";
import useJobQueryStore from "../../../store/jobQueryStore";
import FilterTag from "./FilterTag";

const LocationFilter = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const cities = City.getCitiesOfCountry("IN")?.map((c) => c.name);
  const [searchValue, setSearchValue] = useState<string>("");

  const location = useJobQueryStore((s) => s.location);
  const setLocation = useJobQueryStore((s) => s.setLocation);

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
          location.includes(filteredCities[index].toLowerCase())
            ? "green"
            : "gray"
        }
        onClick={() => setLocation(filteredCities[index].toLowerCase())}
        variant="outline"
      >
        {filteredCities[index]}
      </Button>
    </Box>
  );

  return (
    <>
      <Button
        size="sm"
        variant="link"
        leftIcon={<GlobeIcon />}
        onClick={onOpen}
      >
        Location
        {location.length !== 0 && (
          <Tag ml={2} colorScheme="green">
            {location.length}
          </Tag>
        )}
      </Button>
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
            Pick Locations
            {location.length > 0 && (
              <Flex gap={4} my={4}>
                {location.map((location) => (
                  <FilterTag
                    value={location}
                    del={() => setLocation(location)}
                  />
                ))}
              </Flex>
            )}
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

export default LocationFilter;

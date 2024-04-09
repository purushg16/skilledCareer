import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Tag,
  useDisclosure,
} from "@chakra-ui/react";
import { MixIcon } from "@radix-ui/react-icons";
import { useGetIndustries } from "../../../hooks/useGet";
import useJobQueryStore from "../../../store/jobQueryStore";
import FilterTag from "./FilterTag";

const IndustryModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, isLoading, isFetched } = useGetIndustries();

  const industries = useJobQueryStore((s) => s.industry);
  const setIndustries = useJobQueryStore((s) => s.setIndustry);

  return (
    <>
      <Button size="sm" variant="link" leftIcon={<MixIcon />} onClick={onOpen}>
        Industry
        {industries.length !== 0 && (
          <Tag ml={2} colorScheme="green">
            {industries.length}
          </Tag>
        )}
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Pick Industries
            {industries.length > 0 && (
              <Flex gap={4} my={2}>
                {industries.map((ind) => (
                  <FilterTag value={ind} del={() => setIndustries(ind)} />
                ))}
              </Flex>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isLoading && <Spinner />}

            <Box maxH={500} overflowY="auto">
              {isFetched && data && (
                <SimpleGrid columns={2} spacing={4}>
                  {data.data.map((indutry) => (
                    <Button
                      textTransform="capitalize"
                      onClick={() => setIndustries(indutry.sector)}
                      colorScheme={
                        !industries.includes(indutry.sector) ? "gray" : "green"
                      }
                      variant="outline"
                    >
                      {indutry.sector}
                    </Button>
                  ))}
                </SimpleGrid>
              )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IndustryModal;

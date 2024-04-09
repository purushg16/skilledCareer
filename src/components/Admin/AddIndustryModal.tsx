import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Button,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { PlusIcon } from "@radix-ui/react-icons";
import { usePostIndustry } from "../../hooks/useIndustry";
import { useState } from "react";

const AddIndustryModal = ({ small = false }: { small?: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isPending } = usePostIndustry();
  const [sector, setSector] = useState<string>("");
  return (
    <>
      <Button
        onClick={onOpen}
        w={small ? "max-content" : "80%"}
        leftIcon={<PlusIcon />}
        colorScheme="blue"
        size="sm"
      >
        New Industry
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Industry</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={8}>
            <FormControl>
              <FormLabel> Industry </FormLabel>
              <Flex align="center" gap={4}>
                <Input
                  size={{ base: "sm", md: "md" }}
                  variant="flushed"
                  placeholder="Industry"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                />
                <Button
                  w="40%"
                  colorScheme="blue"
                  size={{ base: "sm", md: "md" }}
                  isLoading={isPending}
                  onClick={() => {
                    mutate({ sector });
                  }}
                  isDisabled={!sector}
                >
                  Add
                </Button>
              </Flex>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddIndustryModal;

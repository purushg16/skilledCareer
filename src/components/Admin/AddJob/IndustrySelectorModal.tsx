import {
  FormControl,
  FormLabel,
  Button,
  Input,
  SimpleGrid,
  Flex,
  Spacer,
  Heading,
  Spinner,
} from "@chakra-ui/react";
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
import AddIndustryModal from "../AddIndustryModal";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";
import { useGetIndustries } from "../../../hooks/useGet";

const IndustrySelectorModal = ({ edit }: EditJobInputProps) => {
  const { data, isLoading } = useGetIndustries();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const industry = useAddJobStore((s) => s.industry);
  const setIndustry = useAddJobStore((s) => s.setIndustry);

  const editIndustry = useEditJobStore((s) => s.industry);
  const setEditIndustry = useEditJobStore((s) => s.setIndustry);

  return (
    <>
      <FormControl>
        <FormLabel> Industry </FormLabel>
        <Button
          onClick={onOpen}
          w="100%"
          justifyContent="left"
          textTransform="capitalize"
        >
          {edit
            ? editIndustry !== ""
              ? editIndustry
              : "Select Industry"
            : industry !== ""
            ? industry
            : "Select Industry"}
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
            {edit
              ? editIndustry !== ""
                ? editIndustry
                : "Select Industry"
              : industry !== ""
              ? industry
              : "Select Industry"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={8}>
            <Flex gap={2}>
              <Input
                size={{ base: "sm", md: "md" }}
                variant="flushed"
                placeholder="Search..."
              />
              <Spacer />
              <AddIndustryModal />
            </Flex>
            {isLoading && <Spinner />}
            {!data && <Heading fontSize="lg"> No data found! </Heading>}
            {data && (
              <SimpleGrid columns={2} spacing={4} my={8}>
                {data.data.map((ind) => (
                  <Button
                    textTransform="capitalize"
                    colorScheme={
                      edit
                        ? editIndustry === ind.sector
                          ? "blue"
                          : "gray"
                        : industry === ind.sector
                        ? "blue"
                        : "gray"
                    }
                    variant={
                      edit
                        ? editIndustry === ind.sector
                          ? "outline"
                          : "solid"
                        : industry === ind.sector
                        ? "outline"
                        : "solid"
                    }
                    onClick={() => {
                      edit
                        ? setEditIndustry(ind.sector)
                        : setIndustry(ind.sector);
                    }}
                  >
                    {ind.sector}
                  </Button>
                ))}
              </SimpleGrid>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default IndustrySelectorModal;

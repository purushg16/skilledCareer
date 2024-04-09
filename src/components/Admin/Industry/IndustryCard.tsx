import {
  Flex,
  Spacer,
  IconButton,
  Heading,
  useColorMode,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useDelIndustry } from "../../../hooks/useIndustry";
import { Industry } from "../../../entities/industry";
import { useRef } from "react";

const IndustryCard = ({ industry }: { industry: Industry }) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate, isPending } = useDelIndustry(onClose);
  const cancelRef = useRef(null);

  return (
    <Flex
      maxW="100%"
      gap={4}
      bg={colorMode === "dark" ? "gray.700" : "gray.100"}
      padding={4}
      borderRadius={10}
      align="center"
    >
      <Heading fontSize="lg" textTransform="capitalize">
        {industry.sector}
      </Heading>

      <Spacer />
      <IconButton
        onClick={onOpen}
        icon={<Cross1Icon />}
        aria-label="clear-icon"
        colorScheme="red"
      />

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Industry
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                ml={4}
                onClick={() => mutate({ sectorId: industry._id })}
                isLoading={isPending}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
};

export default IndustryCard;

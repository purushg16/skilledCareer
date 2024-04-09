import {
  MenuItem,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { SliderIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useChangePassword } from "../../../hooks/useAuth";

const ChangePasswordModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const resetState = () => {
    setPassword("");
    setConfirm("");
    onClose();
  };

  const { mutate, isPending } = useChangePassword(resetState);

  return (
    <>
      <MenuItem
        as={Button}
        leftIcon={<SliderIcon />}
        justifyContent="start"
        borderRadius={0}
        onClick={onOpen}
      >
        Change Password
      </MenuItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody my={4}>
            <FormControl mb={6}>
              <FormLabel fontSize="sm"> Enter Password </FormLabel>
              <Input
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel fontSize="sm"> Confirm Password </FormLabel>
              <Input
                placeholder="Confirm Password"
                mb={4}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={4} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              isDisabled={!password || !confirm || password !== confirm}
              onClick={() => mutate({ password })}
              isLoading={isPending}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangePasswordModal;

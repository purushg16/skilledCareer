import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import languages from "../../../data/languages";
import useAddJobStore from "../../../store/addJobStore";
import { useState } from "react";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";

const LanguagePickerModal = ({ edit }: EditJobInputProps) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const { isOpen, onClose, onOpen } = useDisclosure();

  const langList = useAddJobStore((s) => s.languagePreference);
  const append = useAddJobStore((s) => s.setLanguagePreference);

  const editLangList = useEditJobStore((s) => s.languagePreference);
  const editAppend = useEditJobStore((s) => s.setLanguagePreference);

  const filteredLangs: string[] = languages.filter((lang: string) =>
    lang.toLowerCase().includes(searchValue.toLowerCase())
  );

  const filteredEditLangs: string[] = languages.filter((lang: string) =>
    lang.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Button onClick={onOpen} colorScheme="blue">
        Add
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size={{ base: "full", md: "xl" }}
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxH={500} overflowY="auto">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody mb={4}>
            <Input
              placeholder="Search Languages"
              variant="flushed"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            {edit && (
              <SimpleGrid columns={2} spacing={4} mt={4}>
                {filteredEditLangs.map((language) => (
                  <Button
                    key={language}
                    onClick={() => editAppend(language)}
                    colorScheme={
                      editLangList.includes(language) ? "blue" : "gray"
                    }
                  >
                    {language}
                  </Button>
                ))}
              </SimpleGrid>
            )}
            {!edit && (
              <SimpleGrid columns={2} spacing={4} mt={4}>
                {filteredLangs.map((language) => (
                  <Button
                    key={language}
                    onClick={() => append(language)}
                    colorScheme={langList.includes(language) ? "blue" : "gray"}
                  >
                    {language}
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

export default LanguagePickerModal;

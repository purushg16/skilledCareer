import {
  FormControl,
  Flex,
  FormLabel,
  Spacer,
  Box,
  Tag,
  TagCloseButton,
} from "@chakra-ui/react";
import LanguagePickerModal from "./LanguagePickerModal";
import useAddJobStore from "../../../store/addJobStore";
import { EditJobInputProps } from "../../../entities/EditJobProps";
import useEditJobStore from "../../../store/editJobStore";

const LanguagePreferencePicker = ({ edit = false }: EditJobInputProps) => {
  const languages = useAddJobStore((s) => s.languagePreference);
  const remove = useAddJobStore((s) => s.setLanguagePreference);

  const editlanguages = useEditJobStore((s) => s.languagePreference);
  const editRemove = useEditJobStore((s) => s.setLanguagePreference);
  return (
    <FormControl mb={8}>
      <Flex align="center" mb={4}>
        <FormLabel>Language Prefrence</FormLabel>
        <Spacer />
        <LanguagePickerModal edit={edit} />
      </Flex>
      <Box w="100%" p={4} bg="gray.700" borderRadius={10}>
        {edit ? (
          <Flex gap={4} flexWrap="wrap">
            {editlanguages.map((lang) => (
              <Tag colorScheme="blue" key={lang}>
                {lang}
                <TagCloseButton onClick={() => editRemove(lang)} />
              </Tag>
            ))}
          </Flex>
        ) : (
          <Flex gap={4} flexWrap="wrap">
            {languages.map((lang) => (
              <Tag colorScheme="blue">
                {lang}
                <TagCloseButton onClick={() => remove(lang)} />
              </Tag>
            ))}
          </Flex>
        )}
      </Box>
    </FormControl>
  );
};

export default LanguagePreferencePicker;

import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";

interface Props {
  value: string | number | string[];
  del: () => void;
}

const FilterTag = ({ value, del }: Props) => {
  return (
    <Tag borderRadius="full" variant="solid" colorScheme="blue">
      <TagLabel textTransform="capitalize">{value}</TagLabel>
      <TagCloseButton onClick={del} />
    </Tag>
  );
};

export default FilterTag;

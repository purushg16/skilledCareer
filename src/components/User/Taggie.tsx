import { Flex, Icon, Text } from "@chakra-ui/react";
import { StarFilledIcon } from "@radix-ui/react-icons";

interface Props {
  text: string;
  icon: boolean;
  color: "white" | "blue";
}

const Taggie = ({ text, icon, color }: Props) => {
  return (
    <Flex
      p={2}
      px={4}
      w="max-content"
      borderRadius={5}
      bg={color}
      color={color == "blue" ? "white" : "black"}
      gap={2}
      align="center"
      fontSize="xs"
      fontWeight="bold"
    >
      {icon && <Icon as={StarFilledIcon} />}
      <Text>{text}</Text>
    </Flex>
  );
};

export default Taggie;

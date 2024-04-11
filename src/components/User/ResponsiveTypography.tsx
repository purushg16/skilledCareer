import { Heading, Text } from "@chakra-ui/react";

const ResponsiveHeader = ({
  text,
  color = "black",
}: {
  text: string;
  color?: "white" | "black";
}) => {
  return (
    <Heading
      fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
      color={color}
      children={text}
    />
  );
};

const ResponsiveText = ({ text }: { text: string }) => {
  return <Text fontSize={{ base: "sm", md: "sm", lg: "md" }} children={text} />;
};

export { ResponsiveHeader, ResponsiveText };

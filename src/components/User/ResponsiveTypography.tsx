import { Heading, Text } from "@chakra-ui/react";

const ResponsiveHeader = ({ text }: { text: string }) => {
  return (
    <Heading fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} children={text} />
  );
};

const ResponsiveText = ({ text }: { text: string }) => {
  return <Text fontSize={{ base: "sm", md: "sm", lg: "md" }} children={text} />;
};

export { ResponsiveHeader, ResponsiveText };

import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const SnapContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex
      flexDir="column"
      h="100%"
      justify="space-between"
      className="scroll-body"
      py={8}
    >
      {children}
    </Flex>
  );
};

export default SnapContainer;

import { Flex, Spinner, Text } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Flex w="100%" h="100vh" align="center" justify="center" gap={4}>
      <Spinner />
      <Text> Loading... </Text>
    </Flex>
  );
};

export default LoadingPage;

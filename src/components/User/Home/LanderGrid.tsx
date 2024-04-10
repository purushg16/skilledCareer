import { Box, Button, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { ResponsiveHeader } from "../ResponsiveTypography";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import img from "../../../assets/search.png";

const LanderGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={8}
      spacingY={12}
      p={4}
      py={8}
      alignItems="end"
    >
      <VStack gap={4} align="start">
        <Image src={img} alt="" transform="scaleX(-1)" mb={12} />
        <ResponsiveHeader text="Search for jobs and grow career on our site!" />
        <Text fontSize="sm">
          Our site is easy to use and provide more useful filters to assist you
          in job searching in a better way
        </Text>
      </VStack>
      <Box textAlign="right">
        <Button
          w={{ base: "100%", md: "max-content" }}
          rightIcon={<ArrowRightIcon />}
          bg="white"
          color="black"
          justifyContent="space-between"
          gap={16}
          borderRadius={3}
          _hover={{
            bg: "white",
            color: "black",
          }}
        >
          Build career together
        </Button>
      </Box>
    </SimpleGrid>
  );
};

export default LanderGrid;

import { Box, Button, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import img from "../../../assets/search.png";
import { ResponsiveHeader } from "../ResponsiveTypography";
import Taggie from "../Taggie";
import { Link } from "react-router-dom";

const LanderGrid = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={12}
      p={4}
      py={20}
      alignItems="start"
    >
      <VStack gap={4} align="start">
        <Taggie text="Let's get it done!" color="white" icon />
        <ResponsiveHeader text="Search for jobs and grow career on our site!" />
        <Text fontSize="sm">
          Our site is easy to use and provide more useful filters to assist you
          in job searching in a better way
        </Text>

        <Link to="/jobs">
          <Button
            boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
            mt={8}
            w="max-content"
            rightIcon={<ArrowRightIcon />}
            bg="blue"
            color="white"
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
        </Link>
      </VStack>
      <Box
        textAlign="right"
        h="100%"
        bg="white"
        borderRadius={5}
        aspectRatio="1/1"
        bgImage={img}
        bgRepeat="no-repeat"
        bgSize="contain"
        bgPos="center"
        boxShadow="rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;"
      />
    </SimpleGrid>
  );
};

export default LanderGrid;

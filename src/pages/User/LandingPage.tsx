import { Box, Flex } from "@chakra-ui/react";
import UserNavbar from "../../components/User/Home/UserNavbar";
import LanderGrid from "../../components/User/Home/LanderGrid";
import IndustryGrid from "../../components/User/Home/IndustryGrid";
import ReviewGrid from "../../components/User/Home/ReviewGrid";

const LandingPage = () => {
  return (
    <Box w="100%">
      <Flex flexDir="column" gap={16} align="center" bg="white">
        <Box bg="blue.400" w="100%">
          <Flex flexDir="column" gap={16} maxW={1100} m="auto">
            <UserNavbar />
            <LanderGrid />
          </Flex>
        </Box>
        <Box bg="white" w="100%">
          <IndustryGrid />
        </Box>
        <Box bg="blue" w="100%">
          <Flex flexDir="column" gap={16} maxW={1100} m="auto">
            <ReviewGrid />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;

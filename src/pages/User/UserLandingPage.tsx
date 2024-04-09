import {
  Box,
  Button,
  Image,
  SimpleGrid,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import UserNavbar from "../../components/User/UserNavbar";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import UserReviewStack from "../../components/User/UserReviewStack";
import SnapContainer from "../../components/User/SnapContainer";
import JobSection from "../../components/User/JobSection";
import img from "../../assets/land-img.png";
import {
  ResponsiveHeader,
  ResponsiveText,
} from "../../components/User/ResponsiveTypography";
import { Link } from "react-router-dom";

const UserLandingPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bg="blue">
      <Box
        maxW={1100}
        height="100vh"
        overflowY="auto"
        m="auto"
        p={8}
        id="scroll-container"
      >
        <SnapContainer>
          <UserNavbar />
          <SimpleGrid
            columns={{ base: 1, md: 1, lg: 2 }}
            spacing={16}
            alignItems="end"
          >
            <VStack align="start">
              <Image
                src={img}
                alt="landing-img"
                w={{ base: 250, md: 350 }}
                transform="scaleX(-1)"
              />
              <ResponsiveHeader text="Search for jobs and grow career on our site" />
              <ResponsiveText text="Our site is easy to use and provide more useful filters to assist you in job searching in a better way" />
            </VStack>
            <Link to="/jobs">
              <Button
                w="100%"
                colorScheme={colorMode === "dark" ? "white" : "gray"}
                rightIcon={<ArrowRightIcon />}
                justifyContent="space-between"
                borderRadius={2}
              >
                Search Jobs
              </Button>
            </Link>
          </SimpleGrid>
        </SnapContainer>
        <JobSection />
        <SnapContainer>
          <VStack align="start">
            <VStack align="start">
              <ResponsiveHeader text="Hear what our clients says about us!" />
              <ResponsiveText text="We are destined to deliver the best career for yourself" />
            </VStack>
          </VStack>
          <UserReviewStack />
        </SnapContainer>
      </Box>
    </Box>
  );
};

export default UserLandingPage;

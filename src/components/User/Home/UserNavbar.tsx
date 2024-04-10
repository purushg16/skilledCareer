import { Button, Flex, HStack, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const scrollToSwiper = () => {
    const swiperElement = document.getElementById("review-section");
    if (swiperElement) {
      swiperElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex p={4} bg="blue.50" w="100%">
      <Heading fontSize="lg">SkilledCareer</Heading>
      <Spacer />
      <HStack gap={4}>
        <Link to="/jobs">
          <Button colorScheme="tomato" variant="link">
            Jobs
          </Button>
        </Link>
        <Button colorScheme="tomato" variant="link" onClick={scrollToSwiper}>
          Reviews
        </Button>
      </HStack>
    </Flex>
  );
};

export default UserNavbar;

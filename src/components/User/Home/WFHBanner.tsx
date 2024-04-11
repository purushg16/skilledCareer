import {
  Box,
  Image,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Show,
} from "@chakra-ui/react";
import img from "../../../assets/wrh.png";
import Taggie from "../Taggie";
import { useNavigate } from "react-router-dom";
import useJobQueryStore from "../../../store/jobQueryStore";

const WFHBanner = () => {
  const navigate = useNavigate();
  const set = useJobQueryStore((s) => s.setEmploymentMode);
  const onClick = () => {
    set("work from home");
    navigate("/jobs");
  };
  return (
    <SimpleGrid
      onClick={onClick}
      columns={{ base: 1, md: 2 }}
      spacing={4}
      w="100%"
      h="100%"
      bg="blue.600"
      borderRadius={4}
      color="white"
      p={4}
      cursor="pointer"
    >
      <VStack h={200} justify="space-between" align="start" w="100%">
        <Taggie text="SkilledCarrer" color="white" icon={false} />
        <Box w="100%" mt={4}>
          <Heading fontSize="md" textAlign="left" mb={2}>
            Work from right where you are sitting now!
          </Heading>
          <Text fontSize="xs" mb={2}>
            Discover employment opportunities that enable you to work from the
            comfort of your current location!
          </Text>
          <Text textDecor="underline" fontSize="xs">
            Click Here!
          </Text>
        </Box>
      </VStack>

      <Show above="md">
        <Box pos="relative">
          <Image src={img} pos="absolute" right={0} h={200} />
        </Box>
      </Show>
    </SimpleGrid>
  );
};

export default WFHBanner;

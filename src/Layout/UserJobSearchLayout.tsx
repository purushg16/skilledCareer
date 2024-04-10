import { Flex, Grid, GridItem, Heading, Show, Spacer } from "@chakra-ui/react";
import FilterSection from "../components/User/FilterSection";
import JobHeader from "../components/User/JobHeader";
import UserJobStack from "../components/User/UserJobStack";
import ThemeSwitcher from "../components/ThemeSwitcher";
import { Link } from "react-router-dom";

const UserJobSearchLayout = () => {
  return (
    <Grid
      m="auto"
      maxW={1100}
      templateAreas={{
        base: `"navbar navbar"
            "header header"
            "main main"`,
        md: `"navbar navbar"
            "header header"
            "main main"`,
        lg: `"navbar navbar"
            "header header"
            "nav main"`,
      }}
      gap={4}
      fontWeight="bold"
      maxH="100vh"
      overflowY="clip"
    >
      <GridItem area={"navbar"} p={4}>
        <Flex w="100%">
          <Link to="/">
            <Heading fontSize="xl"> SkilledCareer </Heading>
          </Link>
          <Spacer />
          <ThemeSwitcher />
        </Flex>
      </GridItem>
      <GridItem p={4} area={"header"}>
        <JobHeader />
      </GridItem>
      <Show above="lg">
        <GridItem px={4} area={"nav"} w="max-content">
          <FilterSection />
        </GridItem>
      </Show>
      <GridItem p={4} area={"main"} maxH="100vh" overflowY="auto" w="100%">
        <UserJobStack />
      </GridItem>
    </Grid>
  );
};

export default UserJobSearchLayout;

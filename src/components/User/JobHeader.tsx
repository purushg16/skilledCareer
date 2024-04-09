import { Flex, Spacer, Show, VStack } from "@chakra-ui/react";
import FilterDrawer from "./FilterDrawer";
import { ResponsiveHeader } from "./ResponsiveTypography";
import FiltersStack from "./Filter/FiltersStack";

const JobHeader = () => {
  return (
    <VStack w="100%" gap={4} align="start">
      <Flex w="100%">
        <ResponsiveHeader text="Popular Jobs" />
        <Spacer />
        <Show below="lg">
          <FilterDrawer />
        </Show>
      </Flex>
      <FiltersStack />
    </VStack>
  );
};

export default JobHeader;

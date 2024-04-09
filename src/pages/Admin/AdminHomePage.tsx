import { Box, Heading, VStack, Highlight } from "@chakra-ui/layout";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/tabs";
import { AdminJobStack } from "../../components/Admin/AdminJobStack";
import { Button } from "@chakra-ui/button";
import {
  BackpackIcon,
  MixerHorizontalIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";
import AdminReviewStack from "../../components/Admin/Review/AdminReviewStack";
import AdminIndustryStack from "../../components/Admin/Industry/AdminIndustryStack";

export const AdminHomePage = () => {
  return (
    <VStack align="left" gap={4}>
      <Box>
        <Heading fontSize="2xl">
          <Highlight query={"Welcome,"} styles={{ color: "gray" }}>
            Welcome, Dharshan
          </Highlight>
        </Heading>
      </Box>

      <Tabs>
        <TabList>
          <Tab>
            <Button rightIcon={<BackpackIcon />} variant="text">
              Jobs
            </Button>
          </Tab>
          <Tab>
            <Button rightIcon={<MixerHorizontalIcon />} variant="text">
              Industries
            </Button>
          </Tab>
          <Tab>
            <Button rightIcon={<Pencil2Icon />} variant="text">
              Reviews
            </Button>
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel px={0}>
            <AdminJobStack />
          </TabPanel>
          <TabPanel px={0}>
            <AdminIndustryStack />
          </TabPanel>
          <TabPanel px={0}>
            <AdminReviewStack />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

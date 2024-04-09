import { Flex, Heading, Spacer } from "@chakra-ui/layout";
import AdminNavbarMenu from "./AdminNavbarMenu";

export const AdminNavbar = () => {
  return (
    <Flex w="100%" align="center" p={4}>
      <Heading fontSize="2xl"> SkilledCareer </Heading>
      <Spacer />
      <AdminNavbarMenu />
    </Flex>
  );
};

import {
  Button,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import {
  ExitIcon,
  HamburgerMenuIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import ChangePasswordModal from "./Auth/ChangePasswordModal";

const AdminNavbarMenu = () => {
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerMenuIcon />} />
      <MenuList>
        <Button
          leftIcon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          w="100%"
          justifyContent="start"
          onClick={toggleColorMode}
        >
          Toggle Theme
        </Button>
        <ChangePasswordModal />
        <MenuItem
          as={Button}
          leftIcon={<Icon as={ExitIcon} color="red" />}
          justifyContent="start"
          borderRadius={0}
          color="red"
          onClick={() => {
            localStorage.clear();
            navigate("");
          }}
        >
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AdminNavbarMenu;

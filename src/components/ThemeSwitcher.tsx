import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeSwitcher = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Icon as={SunIcon} />
      <Switch
        id="email-alerts"
        onChange={toggleColorMode}
        isChecked={colorMode === "dark"}
        colorScheme="blue"
      />
      <Icon as={MoonIcon} />
    </HStack>
  );
};

export default ThemeSwitcher;

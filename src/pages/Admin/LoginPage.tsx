import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAdminLogin } from "../../hooks/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, isPending } = useAdminLogin();

  return (
    <Flex
      flexDir="column"
      gap={8}
      align="center"
      p={12}
      borderRadius={10}
      border="1px solid"
      borderColor="gray.600"
    >
      <Heading fontSize="xl"> Login </Heading>
      <VStack gap={4}>
        <FormControl>
          <FormLabel fontSize="xs"> Username </FormLabel>
          <Input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel fontSize="xs"> Password </FormLabel>
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
      </VStack>

      <Button
        colorScheme="blue"
        isDisabled={!username || !password}
        onClick={() => mutate({ userId: username, password })}
        isLoading={isPending}
      >
        Login
      </Button>
    </Flex>
  );
};

export default LoginPage;

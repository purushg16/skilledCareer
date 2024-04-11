import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAdminLogin } from "../../hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate, isPending } = useAdminLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !!localStorage.getItem("token") ||
      localStorage.getItem("token") !== null ||
      localStorage.getItem("token") !== ""
    )
      navigate("/admin");
  }, [navigate]);

  if (
    !!localStorage.getItem("token") ||
    localStorage.getItem("token") !== null ||
    localStorage.getItem("token") !== ""
  )
    return <Navigate to="/admin" />;

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
            type="password"
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

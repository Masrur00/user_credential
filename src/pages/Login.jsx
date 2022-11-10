import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LOGIN_SUCCESS } from "../Redux/Auth/actionTypes";
import { loginsuccess } from "../Redux/Auth/action";

function Login() {
    
    const isAuth = useSelector((state) => state.isAuth);
    const error = useSelector((state) => state.error);
    const [showEror, setError] = useState(false);
    const [Inputvalues, setInputvalues] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleinput = (e) => {
        const { name, value } = e.target;
        setInputvalues({
            ...Inputvalues,
            [name]: value,
        });
    };
  
    const handleSubmit = () => {
        dispatch(loginsuccess(Inputvalues))          
    }

      useEffect(() => {
        if (isAuth) {
          alert("Signup successful");
          navigate("/profile");
        }
        if (error) {
          setError(true);
        }
      }, [isAuth, error]);


        return (
          <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"2xl"}>Login in </Heading>
              </Stack>
              {showEror && <h2 style={{ color: "red" }}>{error}</h2>}
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input type="email" onChange={handleinput} name={"email"} />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      onChange={handleinput}
                      name={"password"}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"center"}
                      justify={"space-between"}
                      color={"blue.400"}
                    >
                      <RouterLink to="/forgot">Forgot password</RouterLink>
                    </Stack>
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={handleSubmit}
                    >
                      Login
                    </Button>
                    <Stack pt={6}>
                      <Text align={"center"}>
                        Already a user?{" "}
                        <RouterLink to="/signup" color={"blue.400"}>
                          SignUp
                        </RouterLink>
                      </Text>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        );
    }

export default Login;

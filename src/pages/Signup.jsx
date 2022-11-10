import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupSucess } from "../Redux/Auth/action";
import { SIGNUP_SUCCESS } from "../Redux/Auth/actionTypes";
import { useEffect } from "react";

function Signup() {
  const isAuth = useSelector(state => state.isAuth)
  const error = useSelector(state => state.error)
  const [showEror, setError] = useState(false);
  const [Inputvalues, setInputvalues] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleinput = (e) => {
    const { name, value } = e.target;
    setInputvalues({
      ...Inputvalues,
      [name]: value,
    });
  };

  const handleSubmit = async() => {
    console.log("handleSubmit :", Inputvalues);
    if (Inputvalues.password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    dispatch(signupSucess(Inputvalues))   
   
  };

  useEffect(() => {
       if (isAuth) {
         alert("Signup successful");
         navigate("/profile");
    }
    if (error) {
      setError(true)
    }
  },[isAuth,error])
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {showEror && <h2 style={{ color: "red" }}>{error}</h2>}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email" display={""} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email....."
                onChange={handleinput}
                name={"email"}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password....."
                  onChange={handleinput}
                  name={"password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="mobile">
              <FormLabel> Mobile</FormLabel>
              <Input
                type="text"
                placeholder="Enter Name....."
                onChange={handleinput}
                name={"mobile"}
              />
            </FormControl>
            <FormControl id="Name">
              <FormLabel> Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter Name....."
                onChange={handleinput}
                name={"name"}
              />
            </FormControl>
            <FormControl id="Name">
              <FormLabel> Place</FormLabel>
              <Input
                type="text"
                placeholder="Enter Name....."
                onChange={handleinput}
                name={"place"}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup;

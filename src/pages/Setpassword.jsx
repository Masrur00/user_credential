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
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { LOGIN_SUCCESS } from "../Redux/Auth/actionTypes";
import { forgot, loginsuccess, passwordReset } from "../Redux/Auth/action";


function Setpassword() {
    const [Inputvalues, setInputvalues] = useState({});
  const link = useSelector(state => state.link);
  console.log(link);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleinput = (e) => {
    const { name, value } = e.target;
    setInputvalues({
      ...Inputvalues,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log(link);
    dispatch(passwordReset(link,Inputvalues)).then((r) => {
      navigate("/login");
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"}>Insert your new Password </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Enter new password</FormLabel>
              <Input type="password" onChange={handleinput} name={"password"} />
            </FormControl>

            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Setpassword;

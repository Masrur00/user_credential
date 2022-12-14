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
import { useDispatch } from "react-redux";
import { forgot, loginsuccess } from "../Redux/Auth/action";


function Forgotpassword() {
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

  const handleSubmit = async () => {
    console.log(Inputvalues.email)
    dispatch(forgot(Inputvalues)).then((r) => {
      console.log("link after giving email", r);
        navigate('/newpassword')
    })
 
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
          <Heading fontSize={"2xl"}>Login in </Heading>
        </Stack>
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

export default Forgotpassword;

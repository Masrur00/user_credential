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
import { signupSucess, update } from "../Redux/Auth/action";
import { useEffect } from "react";

function Updateprofile() {
 
    const { _id, place, mobile, name } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);;
  console.log(token)
  console.log(_id)
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
    console.log("handleSubmit :", Inputvalues);  
      dispatch(update(Inputvalues, _id, token)).then((r) => {
        alert(r);
          navigate('/login')
      });
    };
    
    // useEffect(() => {
    //     dispatch({type: "reset"})
    //     navigate('/login');
    // },[dispatch])

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {/* {showEror && <h2 style={{ color: "red" }}>{error}</h2>} */}
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"2xl"} textAlign={"center"}>
            Edit Profile
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="mobile">
              <FormLabel> Mobile</FormLabel>
              <Input
                type="text"
                placeholder={"insert new mobile number here"}
                onChange={handleinput}
                name={"mobile"}
              />
            </FormControl>
            <FormControl id="Name">
              <FormLabel> Name</FormLabel>
              <Input
                type="text"
                placeholder={"insert new name here"}
                onChange={handleinput}
                name={"name"}
              />
            </FormControl>
            <FormControl id="Name">
              <FormLabel> Place</FormLabel>
              <Input
                type="text"
                placeholder={"insert new place"}
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
                Update
              </Button>
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Updateprofile;

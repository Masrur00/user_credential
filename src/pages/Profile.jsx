import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
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
  Image,
} from "@chakra-ui/react";
import logo from "../pic-hd12.png";
import { Navigate, useNavigate } from "react-router-dom";
const Profile = () => {
  
  const { email, mobile, name } = useSelector((state) => state.user);
  const navigate = useNavigate();

  
  useEffect(() => {}, []);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack align={"center"}>
            <Image src={logo} alt="" h={"200"} />
            <Text fontSize={"2xl"} textAlign={"center"}>
              {name}
            </Text>

            <Text fontSize={"lg"} textAlign={"center"}>
              {email}
            </Text>
            <Text fontSize={"lg"} textAlign={"center"}>
              {mobile}
            </Text>
          </Stack>
          <Stack pt={6}>
            <Text
              align={"center"}
              size="lg"
              bg={"blue.400"}
              _hover={{
                bg: "teal.500",
              }}
              color={"white"}
              pt={2}
              pb={2}
            >
              <RouterLink to="/update" color={"blue.400"}>
                Edit
              </RouterLink>
            </Text>
          </Stack>
        
        </Box>
      </Stack>
    </Flex>
  );
};

export default Profile;

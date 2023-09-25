import { Image } from "@chakra-ui/image"
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import "../app.css"
import { profile_pic, links, waving_hand } from "../../data/db"
import { useState } from "react";

export default function Home() {
  return (

    <Box>
      <Box
        as={"section"}
        rounded={"md"}
        p={"20px"}
        display={"flex"}
        flexDir={{ base: "column", md: "column", lg: "row", sm: "column" }}
        gap={"1rem"}
        justifyContent={"center"}
        fontFamily={"mono"}
      >
        <Flex
          p={{
            base: "20px",
            md: "40px",
            sm: "10px",
          }}
          maxWidth={"764px"}>
          <Box>
            <Text fontSize={{ base: "20px", md: "30px" }}>
              Hi there 👋🏾
              I'm Carlos Kirui, a passionate and resourceful developer ready to take on the world of web development. 🚀</Text>
            <Flex gap={"1rem"} mt={"0.4rem"} flexWrap="wrap">
              <Box pt={"5px"} fontSize={"20px"}>Check me out on: </Box>
              {links &&
                links.map(link => (
                  <Link
                    key={link.url}
                    target="_blank"
                    href={link.url}
                    fontSize={"15px"}
                    shadow={"lg"}
                    px={"10px"}
                    py={"10px"}
                    rounded={"md"}
                    _hover={{
                      textDecoration: "underline",
                      shadow: "sm",
                      transition: "ease 100ms"
                    }}>
                    <Box display={"flex"} flexDir={"row"} justifyContent={"center"} gap={"5px"}>
                      {/* <LinkIcon /> */}
                      <Image src={link.icon} h={"20px"} />
                      <Text>{link.title}</Text>
                    </Box>
                  </Link>
                ))}

            </Flex>
          </Box>
        </Flex>
        <Flex flexDir={"column"} p={{ base: "20px", md: "50px" }}>
          <Image src={profile_pic} h={"300px"} rounded={"md"} />
          <Text>Always love a sunny and beautiful sunset</Text>
        </Flex>
      </Box >
    </Box >
  );
};
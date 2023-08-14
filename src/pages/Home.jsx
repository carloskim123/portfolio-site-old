import { Image } from "@chakra-ui/image"
import { Box, Flex, Link, Text } from "@chakra-ui/layout";
import "../app.css"
import { images, links } from "../../data/db"

export default function Home() {


  
  return (
    <Box>
      <Box
        as={"section"}
        rounded={"md"}
        p={"20px"}
        display={"flex"}
        flexDir={{ base: "column", md: "column", lg: "row" }} // Set flex direction to column on small screens and row on medium screens and above
        gap={"1rem"}
        justifyContent={"center"}
        fontFamily={"mono"}
      >
        <Flex p={{ base: "20px", md: "50px" }} maxWidth={"764px"}>
          <Box>
            <Text fontSize={{ base: "20px", md: "30px" }}>Hi there 👋. I'm Carlos Kirui, a passionate and resourceful developer ready to take on the world of web development. 🚀</Text>
            <Flex gap={"1rem"} mt={"0.4rem"} flexWrap="wrap">
              <Box pt={"5px"} fontSize={"20px"}>Check me out on: </Box>
              {links &&
                links.map(link => (
                  <Link key={link.url} target="_blank" href={link.url} fontSize={"15px"} shadow={"md"} px={"10px"} py={"10px"} rounded={"md"} transition={"300ms"} _hover={{ textDecoration: "underline", shadow: "lg" }}>
                    <Box display={"flex"} flexDir={"row"} justifyContent={"center"} gap={"5px"}>
                      <Image src={ link.icon } h={"20px"} />
                      <Text>{link.title}</Text>
                    </Box>
                  </Link>
                ))}

            </Flex>
          </Box>
        </Flex>
        <Flex flexDir={"column"} p={{ base: "20px", md: "50px" }}>
          <Image src={images} h={"300px"} rounded={"md"} />
          <Text>Always love a sunny and beautiful sunset</Text>
        </Flex>
      </Box>
    </Box>
  );
};
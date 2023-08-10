import { Link } from 'react-router-dom'
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Outlet } from "react-router-dom"
import { Suspense, useEffect, useState } from "react"
import Loader from '../components/Loader'


export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Box py={2} px={4} borderBottom={"solid"} borderBottomColor={"black"} borderBottomWidth={"2px"} h={"50px"}>
        <Flex gap={"2rem"} alignItems={"center"} fontSize={"18px"} >
          <Text mr={"60%"} ml={"10%"}>
            <Link to={"/"} >Carlos Kirui</Link>
          </Text>
          <Box display={{ base: "block", md: "none" }} onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <svg fill="black" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6H6v2h8V6zM6 11h8v-2H6v2zm8 3H6v2h8v-2z" />
              </svg>
            ) : (
              <svg fill="black" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h14v2H3zm0 5h14v2H3zm0 5h14v2H3z" />
              </svg>
            )}
          </Box>
          <Flex display={{ base: "none", md: "flex" }} alignItems={"center"} gap={"2rem"}>
            <Link to={"/projects"}>Projects</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      {showMenu && (
        <Box
          transition="height 0.3s ease-in-out"
          overflow="hidden"
          h={showMenu ? "100px" : "0"}
          py={2}
          px={4}
          borderBottom={"solid"}
          borderBottomColor={"black"}
          borderBottomWidth={"2px"}
          display="flex"
          flexDir="column"
          gap=".5rem"
        >
          <Box
            transition="transform 0.1s ease-in-out"
            fontSize="15px"
            _hover={{ transform: "translateX(2px)" }}
          >
            <Link to={"/projects"}>Projects</Link>
          </Box>
          <Box
            transition="transform 0.1s ease-in-out"
            fontSize="15px"
            _hover={{ transform: "translateX(2px)" }}
          >
            <Link to={"/about"}>About</Link>
          </Box>
          <Box
            transition="transform 0.1s ease-in-out"
            fontSize="15px"
            _hover={{ transform: "translateX(2px)" }}
          >
            <Link to={"/contact"}>Contact</Link>
          </Box>
        </Box>
      )}
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : <Outlet />}
      </Suspense>
    </div>
  )
}

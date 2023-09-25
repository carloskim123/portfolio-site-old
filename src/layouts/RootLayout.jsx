import { Link } from 'react-router-dom';
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import Loader from '../components/Loader';
import { routes } from '../../data/db';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Box py={2} px={4} borderBottom={"solid"} borderBottomColor={"black"} borderBottomWidth={"2px"} h={"50px"}>
        <Flex gap={"2rem"} alignItems={"center"} fontSize={"18px"} >
          <Text mr={"auto"} ml={"2%"}>
            <Link to={"/"} >
              <Box
                mt={"10px"}
                transition="transform 0.1s ease-in-out"
                _hover={{
                  borderBottom: "2px solid black",
                  transform: "translateY(-5px)",
                }}>Carlos.K</Box>
            </Link>
          </Text>
          <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
            {showMenu ? (
              <svg fill="black" width="35px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 6H6v2h8V6zM6 11h8v-2H6v2zm8 3H6v2h8v-2z" />
              </svg>
            ) : (
              <svg fill="black" width="34px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h14v2H3zm0 5h14v2H3zm0 5h14v2H3z" />
              </svg>
            )}
          </Box>
          <Flex display={{ base: "none", md: "flex" }} gap={"2rem"} >
            {routes.map(route => (
              <Box
                key={route.path}
                transition="transform 0.1s ease-in-out"
                fontSize="20px"
                _hover={{
                  transform: "translateY(-2px)",
                  borderBottom: "1px solid black",
                }}
              >
                <Link to={route.path}>{route.pathname}</Link>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
      {showMenu && (
        <Box
          transition="height 0.3s ease-in-out"
          overflow="auto"
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
          {routes.map(route => (
            <Box
              key={route.path}
              transition="transform 0.1s ease-in-out"
              fontSize="15px"
              _hover={{ transform: "translateX(12px)" }}
            >
              <Link to={route.path}>{route.pathname}</Link>
            </Box>
          ))}
        </Box>
      )}
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : <Outlet />}
      </Suspense>
    </div>
  );
}

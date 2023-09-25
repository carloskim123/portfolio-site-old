import { Link } from 'react-router-dom';
import { Box, Flex, Text, Button } from "@chakra-ui/react"; // Make sure to import Button from Chakra UI
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

  // Function to close the mobile menu
  const closeMenu = () => {
    setShowMenu(false);
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
          <Button onClick={toggleMenu} display={{ base: "block", md: "none" }}>
            {showMenu ? "Close" : "Menu"}
          </Button>
        </Flex>
      </Box>
      {showMenu && (
        <Box
          position="fixed"
          top="0"
          left="0"
          height="100%"
          width="100%"
          background="rgba(0, 0, 0, 0.7)"
          display="flex"
          justifyContent="flex-end"
          zIndex="999"
        >
          <Box
            width="70%"
            background="white"
            height="100%"
            overflowY="auto"
            p="1rem"
          >
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="18px">Menu</Text>
              <Button onClick={closeMenu}>X</Button>
            </Flex>
            {routes.map(route => (
              <Box
                key={route.path}
                fontSize="15px"
                my="0.5rem"
                transition="transform 0.2s ease-in-out"
                _hover={{ transform: "translateX(8px)" }}
              >
                <Link to={route.path}>{route.pathname}</Link>
              </Box>
            ))}
          </Box>
        </Box>
      )}
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : <Outlet />}
      </Suspense>
    </div>
  );
                }

import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState, useRef } from "react"; // Import useRef
import Loader from '../components/Loader';
import { routes } from '../../data/db';
import { Button, Icon } from '@chakra-ui/react';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const sidebarRef = useRef(null); // Create a ref for the sidebar

  // Function to close the mobile menu when entering desktop view
  const closeMobileMenu = () => {
    if (window.innerWidth >= 768 && showMenu) {
      setShowMenu(false);
    }
  };

  // Attach the event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);

    // Add a click event listener to the document
    // document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', closeMobileMenu);

      // Remove the click event listener when the component unmounts
      // document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);



  const toggleMobileMenu = () => {
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
          <Box display={{ base: "block", md: "none" }} onClick={toggleMobileMenu}>
            {showMenu ? (
              <Box
                _hover={{ cursor: "pointer" }}
                pl={"10%"}
                onClick={() => setShowMenu(false)} // Close the sidebar when clicked
              >
                ✖️
              </Box>
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
          position="fixed"
          top="10"
          left="0"
          zIndex="10"
          w="100%"
          h="100%"
          onClick={() => setShowMenu(false)}
          backdropFilter="blur(5px)"
          background="rgba(0, 0, 0, 0.5)"
          transition="opacity 1s, width 1s ease" // Add transitions
          opacity={showMenu ? 1 : 0} // Control opacity based on showMenu state
        >
          <Box
            overflow="hidden"
            h={showMenu ? "100vh" : "0"}
            w={showMenu ? "50%" : "0"}
            py={7}
            px={4}
            background={"#EDE0D4"}
            borderBottom={"solid"}
            borderBottomColor={"black"}
            borderBottomWidth={"2px"}
            display="flex"
            flexDir="column"
            gap=".5rem"
          >
            <Box
              _hover={{ cursor: "pointer" }}
              pl={"90%"}
              onClick={() => setShowMenu(false)} // Close the sidebar when clicked
            >
              ✖️ 
            </Box>
            {routes.map(route => (
              <Box
                w={"100%"}
                key={route.path}
                transition="transform 0.1s ease-in-out"
                fontSize="20px"
                _hover={{ background: "gray.300", transform: "translateX(2px)" }}
                onClick={() => {
                  navigate(route.path);
                  setShowMenu(false);
                }}
              >
                {route.pathname}
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

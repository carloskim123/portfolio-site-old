import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Text, Icon, background, position } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState, useRef } from "react";
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import { routes } from '../../data/db';
import "../app.css";

import logo from '../../public/dark.svg';

const RootLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();



  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3400);

    return () => {

    }
  }, []);



  // Attach the event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    return () => {
      window.removeEventListener('resize', closeMobileMenu);

    };

  }, [showMenu]);


  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMobileMenu = () => {
    if (window.innerWidth >= 770 && showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(false);
    }
  };



  return (
    <div >
      <Flex flexDirection="column" minH="100vh" >
        <Box
          py={2}
          px={4}
          h="60px"
          w={"100%"}
          top={0}
          position={"fixed"}
          zIndex={100}
          borderBottom={"2px solid black"}
          backdropFilter="blur(10px)"
          background="rgba(0, 0, 0, 0.001)"

        >

          <Flex justifyContent={"space-between"} alignItems="center" fontSize="18px">
            <Link to="/">
              <Text
                fontSize={"20px"}
                mt="10px"
                ml={'auto'}
                _hover={{
                  borderBottom: "2px solid black",
                  transform: "translateY(-5px)",
                }}
              >
                Carlos.K
              </Text>
            </Link>
            <Box display={{ base: "block", md: "none" }} onClick={toggleMobileMenu}>
              {showMenu ? (
                <Box onClick={closeMobileMenu} ></Box>
              ) : (
                <Box onClick={toggleMobileMenu} _hover={{ cursor: "pointer" }} >
                  <svg fill="black" width="34px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6h14v2H3zm0 5h14v2H3zm0 5h14v2H3z" />
                  </svg>
                </Box>

              )}
            </Box>
            <Flex display={{ base: "none", md: "flex" }} gap="2rem">
              {routes.map(route => (
                <Link key={route.path} to={route.path}>
                  <Text
                    fontSize="20px"
                    _hover={{
                      transform: "translateY(-2px)",
                      borderBottom: "1px solid black",
                    }}
                  >
                    {route.pathname}
                  </Text>
                </Link>
              ))}
            </Flex>
          </Flex>
        </Box>
        <Flex flex="1" paddingTop={"60px"} >

          <Box
            cursor={"pointer"}
            position="fixed"
            top="0"
            left={showMenu ? "0" : "-100%"}
            zIndex="100"
            w="100%"
            h="100%"
            backdropFilter="blur(3px)"
            background="rgba(0, 0, 0, 0.01)"
            transition="left 250ms ease-in-out"
          >

            <Box

              className="sidebar"
              overflow="hidden"
              h="100vh"
              w="100%"
              py={7}
              px={6}
              // background="#EDE0D4"
              borderBottom="2px solid black"
              display="flex"
              flexDir="column"
              gap=".5rem"
            >
              <Flex >
                <Box  mr={"auto"} fontSize={"23px"}>Carlos.K 👋🏽</Box>
                <Box
                  // ml="auto"
                  onClick={closeMobileMenu}
                  cursor="pointer"
                  fontSize="20px"
                  _hover={{ transform: "scale(1.2)" }}
                >✖️</Box>
              </Flex>

              {routes.map(route => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => {
                    navigate(route.path);
                    closeMobileMenu();
                  }}
                >
                  <Text
                    pt={".5rem"}
                    fontSize="25px"
                    _hover={{ cursor: "pointer", textDecoration: "underline", transition: "all" }}
                  >
                    {route.pathname}
                  </Text>
                </Link>
              ))}
            </Box>
          </Box>
          <Box flex="1">
            <Suspense fallback={<Loader />}>
              {isLoading ? <Loader /> : <Outlet />}
            </Suspense>
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </div >
  );
};

export default RootLayout;

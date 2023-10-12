import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react"

// Local Imports
import Loader from '../components/Loader';
import Footer from '../components/Footer';
import CustomModal from '../components/CustomModal';

import { routes } from '../../data/db';
import "../app.css";

const RootLayout = () => {
  const [hasCheckedForUpdate, setHasCheckedForUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lastUpdateCheckTime, setLastUpdateCheckTime] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    const fetchedUpdateState = localStorage.getItem("hasCheckedForUpdate");
    setHasCheckedForUpdate(fetchedUpdateState === "true"); // Parse as boolean

    const lastCheckedTime = localStorage.getItem("lastUpdateCheckTime");
    if (lastCheckedTime) {
      setLastUpdateCheckTime(Number(lastCheckedTime));
    }

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId); // Cleanup interval
    };
  }, []);


  useEffect(() => {
    window.addEventListener('resize', closeMobileMenu);
    return () => {
      window.removeEventListener('resize', closeMobileMenu);
    };
  }, [showMenu])




  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };

  const checkedForUpdate = () => {
    setHasCheckedForUpdate(true);
    localStorage.setItem('hasCheckedForUpdate', true);

    setLastUpdateCheckTime(Date.now());
    localStorage.setItem('lastUpdateCheckTime', Date.now().toString());
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    checkedForUpdate();
  };



  setTimeout(() => {
    setHasCheckedForUpdate(false);
    localStorage.setItem("hasCheckedForUpdate", false);
    localStorage.clear();
  }, 846000)

  // Determine whether to show the "Check for updates" button
  const showUpdateButton =
    !hasCheckedForUpdate &&
    (!lastUpdateCheckTime ||
      Date.now() - lastUpdateCheckTime >= 24 * 60 * 60 * 1000); // 24 hours in milliseconds

  const closeMobileMenu = () => {
    if (window.innerWidth >= 770 && showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(false);
    }
  };

  return (
    <div>
      <Flex flexDirection="column" minH="100vh" cursor="auto" >
        <Box
          py={2}
          px={4}
          h="60px"
          w={"100%"}
          top={0}
          position={"fixed"}
          zIndex={100}
          borderBottom={"2px solid black"}
          backdropFilter="blur(5px)"
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
                <Box onClick={closeMobileMenu}></Box>
              ) : (
                <Box onClick={toggleMobileMenu} _hover={{ cursor: "pointer", transform: "rotate(360deg)" }}>
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
        {showUpdateButton && (

          <Box mt={"4rem"}>
            <>
              <Button ml={"10px"} bg={"blue.400"} color={"black"} _hover={{ color: "black" }} onClick={openModal}>Check for Updates</Button>
              <CustomModal isOpen={isModalOpen} onClose={closeModal} />
            </>
          </Box>
        )}

        <Flex flex="1" paddingTop={"60px"} >
          <Box
            cursor="pointer"
            position="fixed"
            // top={0}
            bottom={showMenu ? "0px" : "-100%"}
            zIndex={100}
            w="100%"
            h="100%"
            backdropFilter="blur(4px)"
            background="rgba(0, 0, 0, 0.01)"
            borderTop="2px solid #5a189a"
            transition="bottom 400ms cubic-bezier(0.645, 0.045, 0.355, 1)"
          >
            <Box
              className="sidebar"
              overflow="hidden"
              h="100vh"
              w="100%"
              py={7}
              px={6}
              borderBottom="2px solid black"
              display="flex"
              flexDir="column"
              gap=".5rem"
            >
              <Flex >
                <Box mr={"auto"} fontSize={"23px"}>Carlos.K 👋🏽<Text fontSize={"14px"}>{currentTime.toLocaleTimeString()}</Text></Box>
                <Box
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
    </div>
  );
};

export default RootLayout;

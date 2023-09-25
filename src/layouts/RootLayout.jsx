import { Link, useNavigate } from 'react-router-dom';
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState, useRef } from "react";
import Loader from '../components/Loader';
import { routes } from '../../data/db';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

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

  // Close the menu when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close the menu when a link is clicked or when changing pages
  const handleLinkClick = () => {
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
            <svg fill="black" width="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 3h16v2H2V3zm0 5h16v2H2V8zm0 5h16v2H2v-2z" />
            </svg>
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
          alignItems="flex-start"
          zIndex="999"
          onClick={closeMenu} // Close menu when clicking anywhere on the overlay
        >
          <Box
            ref={menuRef}
            width="70%"
            background="white"
            height="100%"
            overflowY="auto"
            p="1rem"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
            transition="transform 0.3s ease-in-out" // Adding a transition for animation
            transform={showMenu ? "translateX(0)" : "translateX(100%)"} // Slide in from right
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
                <Link to={route.path} onClick={handleLinkClick}>
                  {route.pathname}
                </Link>
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

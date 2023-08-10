import { Link } from 'react-router-dom'
import { Box, Flex, Text } from "@chakra-ui/layout"
import { Outlet } from "react-router-dom"
import { Suspense, useEffect, useState } from "react"
import Loader from '../components/Loader'


export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <div>
      <Box py={2} px={4} borderBottom={"solid"} borderBottomColor={"black"} borderBottomWidth={"2px"} h={"50px"}>
        <Flex gap={"2rem"} alignItems={"center"} fontSize={"18px"}>
          <Text mr={"60%"} ml={"10%"}>
            <Link to={"/"} >Carlos Kirui</Link>
          </Text>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>

        </Flex>
      </Box>
      <Suspense fallback={<Loader />}>
        {isLoading ? <Loader /> : <Outlet />}
      </Suspense>
    </div>
  )
}

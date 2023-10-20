// External Libraries
import { useNavigate } from 'react-router-dom'; // Importing the 'useNavigate' hook for navigation
import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, Text, } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Local Imports
import {
  links,
  newImages
} from "../../data/db"; // Importing data from a local source
import { daytimeQuotes, nighttimeQuotes } from "../../data/quoteable"; // Importing quotes based on day or night
import {
  loadNewWindow,
  shuffle,
  currentDayTime,
  getRandomFromArray
} from '../../data/helpers' // Importing helper functions

import "../app.css"; // Importing CSS styles

export default function Home() {
  const [dayPeriod, setDayPeriod] = useState("day"); // Initialize state for the current day period
  const [randomQuote, setRandomQuote] = useState(""); // Initialize state for a random quote
  const [randomImage, setRandomImage] = useState(""); // Initialize state for a random image

  const currentTime = new Date().getHours(); // Get the current time in hours
  const shuffledArray = shuffle(links); // Shuffle an array of links

  // Get values from local storage
  let validated_key = localStorage.getItem("validated");

  const navigate = useNavigate(); // Initialize navigation function using the 'useNavigate' hook

  useEffect(() => {
    // Determine the day period based on the current time
    currentDayTime(setDayPeriod, currentTime);
    

    // Select quotes based on the day period
    const currentQuotesArray = dayPeriod === "night" ? nighttimeQuotes : daytimeQuotes;
    const shuffledImages = shuffle(newImages);


    // Set a random quote in the state
    getRandomFromArray(setRandomQuote, currentQuotesArray);
    getRandomFromArray(setRandomImage,shuffledImages);

  }, [currentTime, dayPeriod]);

  useEffect(() => {
    // Check if the user is not validated and the number of trials is greater than or equal to 5
    if (!validated_key) {
      // Navigate to the '/validate_page' route
      navigate('/validate_page');
    }
  }, [validated_key])

  return (
    <Box>
      <Box
        as="section"
        rounded="md"
        px="0px"
        display="flex"
        flexDir={{ base: "column", md: "column", lg: "row", sm: "column" }}
        gap="1rem"
        justifyContent="center"
        fontFamily="mono"
      >
        <Flex p={{ base: "20px", md: "40px", sm: "10px" }} maxWidth="764px">
          <Box>
            <Text fontSize={{ base: "20px", md: "30px", sm: "25px" }}>
              Hi there 👋🏾 I'm Carlos Kirui, a passionate and resourceful developer ready to take on the world of web development. 🚀
            </Text>
            <Flex gap="1rem" mt="0.4rem" flexWrap="wrap">
              <Box pt="5px" fontSize="20px">
                Check me out on:
              </Box>
              {links &&
                shuffledArray.map((link) => (
                  <Link
                    key={link.url}
                    target="_blank"
                    href={link.url}
                    fontSize="15px"
                    shadow="lg"
                    px="10px"
                    py="10px"
                    rounded="md"
                    _hover={{
                      textDecoration: "underline",
                      shadow: "sm",
                      transition: "ease 100ms",
                    }}
                  >
                    <Box display="flex" flexDir="row" justifyContent="center" gap="5px">
                      <Image src={link.icon} h="20px" />
                      <Text>{link.title}</Text>
                    </Box>
                  </Link>
                ))}
            </Flex>
          </Box>
        </Flex>
        <Flex flexDir="column" p={{ base: "20px", md: "50px" }}>
          <Tooltip
            label="click for image url"
            aria-label="A tooltip"
            placement="auto-start"
            hasArrow
            arrowSize="10"
          >
            <Image
              src={randomImage}
              h="300px"
              rounded="none"
              onClick={() => loadNewWindow(randomImage)}
              _hover={{
                cursor: "pointer",
              }}
            />

          </Tooltip>
          <Text>{randomQuote}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

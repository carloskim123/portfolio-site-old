import { useEffect, useState } from "react";
import { Container, Text, Flex } from "@chakra-ui/layout";
import { ColorRing } from "react-loader-spinner";
import { currentDayTime, getRandomFromArray } from "../../data/helpers";
import { daytimeQuotes, nighttimeQuotes } from "../../data/quoteable";

export default function Loader() {
    const [randomQuote, setRandomQuote] = useState(""); // Initialize state for a random quote
    const [dayPeriod, setDayPeriod] = useState("day"); // Initialize state for the current day period
    const [currentTime, setCurrentTime] = useState(new Date().getHours()); // Initialize state for the current time in hours

    useEffect(() => {
        // Update the current time in state
        setCurrentTime(new Date().getHours());

        // Calculate dayPeriod and get quotes based on the current time
        currentDayTime(setDayPeriod, currentTime);

        // Determine which set of quotes to use based on the day period
        let currentQuotesArray = dayPeriod === "night" ? nighttimeQuotes : daytimeQuotes;

        // Set a random quote in the state
        getRandomFromArray(setRandomQuote, currentQuotesArray);
    }, [currentTime, dayPeriod]);

    // Define styles for the loader overlay
    const loaderOverlayStyles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        zIndex: 9999,
    };

    // Define styles for the loader
    const loaderStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30vh",
    };

    return (
        <div className="loader-overlay" style={loaderOverlayStyles}>
            <Container style={loaderStyles}>
                <Flex>
                    {/* Display a color ring loader */}
                    <ColorRing
                        visible={true}
                        height="94"
                        width="94"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#fb8b24', '#ef476f','#ef476f']}
                    />
                </Flex>
                <Flex mt={"1em"}>
                    <Text>{randomQuote}</Text> {/* Display the random quote */}
                </Flex>
            </Container>
        </div>
    );
}

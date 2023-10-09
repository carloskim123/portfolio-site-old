import { useEffect, useState } from "react";
import { Container, Text, Flex } from "@chakra-ui/layout";
import { TailSpin, ColorRing } from "react-loader-spinner";
import { currentDayTime, getRandomFromArray } from "../../data/db";
import { daytimeQuotes, nighttimeQuotes } from "../../data/quoteable";

export default function Loader() {
    const [randomQuote, setRandomQuote] = useState("");
    const [dayPeriod, setDayPeriod] = useState("day");
    const [currentTime, setCurrentTime] = useState(new Date().getHours()); // Get current hour

    useEffect(() => {
        // Update the current time in state
        setCurrentTime(new Date().getHours());

        // Calculate dayPeriod and get quotes
        currentDayTime(setDayPeriod, currentTime);

        let currentQuotesArray = dayPeriod === "night" ? nighttimeQuotes : daytimeQuotes;

        getRandomFromArray(setRandomQuote, currentQuotesArray);
    }, [currentTime, dayPeriod]);

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

    const loaderStyles = {
        /* Add any additional loader styles here */
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
                    <ColorRing
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                        wrapperStyle={{}}
                        wrapperClass="blocks-wrapper"
                        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                    />
                </Flex>
                <Flex mt={"1em"}>
                    <Text>{randomQuote}</Text>
                </Flex>
            </Container>
        </div>
    );
}

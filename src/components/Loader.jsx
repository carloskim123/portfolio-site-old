// Lib Imports
import { useEffect, useState } from "react";
import { Container, Text, Flex } from "@chakra-ui/layout";
import { TailSpin } from "react-loader-spinner";

// Local Imports
import { currentDayTime, currentTime, getRandomQuote } from "../../data/db";
import { daytimeQuotes, nighttimeQuotes } from "../../data/quoteable";

export default function Loader() {
    const [randomQuote, setRandomQuote] = useState("");
    const [dayPeriod, setDayPeriod] = useState("day");

    let currentQuotesArray;

    useEffect(() => {
        currentDayTime(setDayPeriod, currentTime);

        if (dayPeriod === "night") currentQuotesArray = nighttimeQuotes;
        if (dayPeriod === "day") currentQuotesArray = daytimeQuotes;

        getRandomQuote(setRandomQuote, currentQuotesArray);
    }, [currentTime]);

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
                    <TailSpin
                        height="45"
                        width="80"
                        color="#000"
                        ariaLabel="tail-spin-loading"
                        radius="0"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </Flex>
                <Flex mt={"1em"}>
                    <Text> {console.log(dayPeriod)}{randomQuote}</Text>
                </Flex>
            </Container>
        </div>
    );
}

import { Container, Text, Flex } from "@chakra-ui/layout";
import { TailSpin } from "react-loader-spinner";
import { loadingQuotes } from "../../data/db";
import { useEffect, useState } from "react";

export default function Loader() {
    const [randomQuote, setRandomQuote] = useState("");

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * loadingQuotes.length);
        setRandomQuote(loadingQuotes[randomIndex].text);
    }

    useEffect(() => {
        getRandomQuote();
    },[])

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

    };


    return (
        <div className="loader-overlay" style={loaderOverlayStyles}>
            <Container
                display={"flex"}
                justifyContent={"center"}
                mt={"30vh"}
                style={loaderStyles}
            >

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
                    <Text>{randomQuote}</Text>
                </Flex>
            </Container>

        </div >
    );
}

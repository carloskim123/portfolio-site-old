import { useState, useEffect } from "react"
import { validateBrowser } from "./validator"
import { useNavigate } from 'react-router-dom'

import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Text,
    Flex,
} from "@chakra-ui/react";
export default function ValidateForm() {
    const [browserName, setBrowserName] = useState("")

    let validated_key = localStorage.getItem("validated");
    const navigate = useNavigate();

    useEffect(() => {
        if (validated_key) {
            navigate('/')
        }

    }, [validated_key])

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

    return (
        <div className="loader-overlay" style={loaderOverlayStyles}>

            <Container mt="3rem">
                <Box maxW="md" mx="auto" p={4} rounded="md">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <FormControl id="user_name" mb={4}>
                            <Text>For security purposes, you need to enter your browser name. You will be asked to enter browser name after 2hrs</Text>
                            <FormLabel>Enter Browser Name:</FormLabel>
                            <Input
                                autoComplete="off"
                                autoFocus={true}
                                type="text"
                                value={browserName}
                                onChange={(e) => setBrowserName(e.target.value)}
                                name="user_name"
                                borderColor="black.300"
                                focusBorderColor="blue.400"
                                _hover={{
                                    borderColor: "blue.400",
                                }}
                            />
                        </FormControl>
                        <Button
                            onClick={() => validateBrowser(browserName, navigate)}
                            colorScheme="blue"
                            size="lg"
                            w="100%"
                            type="submit"
                        >
                            Validate
                        </Button>
                    </form>
                </Box>
            </Container>
        </div>

    )
}



export  function InsecureConnection() {
    return <div>Your browser is not valid</div>;
}

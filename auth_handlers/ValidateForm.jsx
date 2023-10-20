import { useState, useEffect } from "react";
import { validateBrowser } from "./validator"; // Importing a function for browser validation
import { useNavigate } from 'react-router-dom';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Container,
    Text
} from "@chakra-ui/react";

export default function ValidateForm() {
    const [browserName, setBrowserName] = useState(""); // Initialize state for the browser name input

    let validated_key = localStorage.getItem("validated"); // Get a value from local storage
    const navigate = useNavigate(); // Initialize navigation function using the 'useNavigate' hook

    useEffect(() => {
        // If the user is already validated, navigate to the home page
        if (validated_key) {
            navigate('/');
        }
    }, [validated_key]);

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

    return (
        <div className="loader-overlay" style={loaderOverlayStyles}>
            <Container mt="3rem">
                <Box maxW="md" mx="auto" p={4} rounded="md">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <FormControl id="user_name" mb={4}>
                            <Text>For security purposes, you need to enter your browser name. You will be asked to enter the browser name after 12 hours.</Text>
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
                            onClick={() => validateBrowser(browserName, navigate)} // Call the 'validateBrowser' function with the browser name and navigate function
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

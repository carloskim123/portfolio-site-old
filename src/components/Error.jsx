import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate(); // Initialize the navigation function from 'react-router-dom'

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="60vh"
        >
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Submission Error! {/* Display an error message */}
            </Text>

            <Button colorScheme="blue" size="lg" onClick={() => navigate("/contact")}>
                Try again {/* Display a button to try the submission again and navigate to the "/contact" route */}
            </Button>
        </Box>
    );
}

export default Error;

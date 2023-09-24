import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function HasSubmitted() {
    const navigate = useNavigate();


    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="60vh"
        >
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Submission Successful!
            </Text>
            <Text fontSize="lg" textAlign="center" mb={8}>
                Email sent to carloskirui154@gmail.com
            </Text>
            <Button colorScheme="blue" size="lg" onClick={() => navigate("/")}>
                Back to Home
            </Button>
        </Box>
    );
}

export default HasSubmitted;

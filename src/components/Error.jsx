import React, { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Error() {
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
                Submission Error!
            </Text>
            
            <Button colorScheme="blue" size="lg" onClick={() => navigate("/contact")}>
                Try again
            </Button>
        </Box>
    );
}

export default Error;

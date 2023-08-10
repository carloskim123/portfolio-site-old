import React from "react";
import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Box maxW="md" mx="auto" p={4} bg="#f1faee"  borderStyle={"solid"} borderWidth={"2px"} borderColor={"black"} rounded={"md"}>
            <form onSubmit={handleSubmit}>
                <FormControl id="name" mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                </FormControl>
                <FormControl id="email" mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="message" mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Input as="textarea" rows={4} />
                </FormControl>
                <Button type="submit" colorScheme="blue">
                    Submit
                </Button>
            </form>
        </Box>
    );
}

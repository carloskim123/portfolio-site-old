import React from "react";
import { Box, FormControl, FormLabel, Input, Button, Container, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";


export default function Contact() {
    const navigate = useNavigate()
    const handleSubmit = () => {
        // Handle form submission logic here
        navigate('/')
    };

    return (
        <Container mt={"3rem"}>
            <Flex display={"flex"} justifyContent={"center"} fontSize={"26px"} my={"1rem"}>You can Contact me through the form below</Flex >
            <Box maxW="md" mx="auto" p={4} borderWidth="1px" borderColor="black" rounded="md">
                <form onSubmit={handleSubmit}>
                    <FormControl id="name" mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" borderWidth="1px" borderColor="black" outline={"none"} />
                    </FormControl>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" borderWidth="1px" borderColor="black" />
                    </FormControl>
                    <FormControl id="message" mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Input as="textarea" rows={4} borderWidth="1px" borderColor="black" />
                    </FormControl>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
}
import React, { useRef } from "react";
import { Box, FormControl, FormLabel, Input, Button, Container, Text, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef()

    const navigate = useNavigate()
    const handleSubmit = () => {
        // Handle form submission logic here
        navigate('/')
    };
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            "service_cq60crt",
            "template_4vjr6va",
            form.current, "FgoXhK367G_Vghk5J")
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };




    return (
        <Container mt={"3rem"}>
            <Flex display={"flex"} justifyContent={"center"} fontSize={"26px"} my={"1rem"}>You can Contact me through the form below</Flex >
            <Box maxW="md" mx="auto" p={4} borderWidth="1px" borderColor="black" rounded="md">
                <form onSubmit={sendEmail} ref={form}>
                    <FormControl id="name" mb={4}>
                        <FormLabel>Name</FormLabel>
                        <Input type="text" name="user_name" borderWidth="1px" borderColor="black" outline={"none"} />
                    </FormControl>
                    <FormControl id="email" mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name="user_email" borderWidth="1px" borderColor="black" />
                    </FormControl>
                    <FormControl id="message" mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Input as="textarea" name="message" rows={4} borderWidth="1px" borderColor="black" />
                    </FormControl>
                    <Button type="submit">Submit </Button>
                </form>
            </Box>
        </Container>
    );
}
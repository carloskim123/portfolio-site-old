import React, { useRef, useState } from "react";
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
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const errors = {};

    if (!form.current.user_name.value.trim()) {
      errors.name = "Name is required";
    }

    if (!form.current.user_email.value.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^\S+@\S+\.\S+$/.test(form.current.user_email.value.trim())
    ) {
      errors.email = "Invalid email format";
    }

    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      emailjs
        .sendForm(
          "service_cq60crt",
          "template_4vjr6va",
          form.current,
          "FgoXhK367G_Vghk5J"
        )
        .then(
          (result) => {
            console.log(result.text);
            navigate("/");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container mt={"3rem"}>
      <Flex
        display={"flex"}
        justifyContent={"center"}
        fontSize={"26px"}
        my={"1rem"}
      >
        You can Contact me through the form below
      </Flex>
      <Box
        maxW="md"
        mx="auto"
        p={4}
        borderWidth="1px"
        borderColor="black"
        rounded="md"
      >
        <form onSubmit={handleSubmit} ref={form}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="user_name"
              borderWidth="1px"
              borderColor="black"
              outline={"none"}
            />
            <Text color="red.500">{formErrors.name}</Text>
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="user_email"
              borderWidth="1px"
              borderColor="black"
            />
            <Text color="red.500">{formErrors.email}</Text>
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Input
              as="textarea"
              name="message"
              rows={4}
              borderWidth="1px"
              borderColor="black"
            />
            <Text color="red.500">{formErrors.message}</Text>
          </FormControl>
          <Button bg={"green"}  type="submit">Submit</Button>
        </form>
      </Box>
    </Container>
  );
}

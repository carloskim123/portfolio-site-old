import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!form.current.user_name.value.trim()) {
      errors.name = "Name is required";
    }

    if (!form.current.user_email.value.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.current.user_email.value.trim())) {
      errors.email = "Invalid email format";
    }

    if (!form.current.message.value.trim()) {
      errors.message = "Message is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      setIsSubmitted(true);

      // Disable form inputs and submit button
      const formInputs = form.current.elements;
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].disabled = true;
      }
      form.current.querySelector("button[type=submit]").disabled = true;

      try {
        await emailjs.sendForm(
          "service_cq60crt",
          "template_4vjr6va",
          form.current,
          "FgoXhK367G_Vghk5J"
        );
        navigate("/success");
      } catch (error) {
        console.log(error.text);
        setIsSubmitted(false);

        // Re-enable form inputs and submit button on error
        for (let i = 0; i < formInputs.length; i++) {
          formInputs[i].disabled = false;
        }
        form.current.querySelector("button[type=submit]").disabled = false;
      }
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
        // borderColor="black.300"
        rounded="md"
        boxShadow="lg"
      >
        <form onSubmit={handleSubmit} ref={form}>
          <FormControl id="name" mb={4}>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="user_name"
              borderColor="black.300"
              focusBorderColor="blue.400"
              isDisabled={isSubmitted}
            />
            <Text color="red.500">{formErrors.name}</Text>
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="user_email"
              borderColor="black.300"
              focusBorderColor="blue.400"
              isDisabled={isSubmitted}
            />
            <Text color="red.500">{formErrors.email}</Text>
          </FormControl>
          <FormControl id="message" mb={4}>
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              rows={4}
              borderColor="black.300"
              focusBorderColor="blue.400"
              isDisabled={isSubmitted}
            />
            <Text color="red.500">{formErrors.message}</Text>
          </FormControl>
          <Button
            colorScheme="blue"
            size="lg"
            width="100%"
            type="submit"
            isLoading={isSubmitted}
            loadingText="Submitting..."
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

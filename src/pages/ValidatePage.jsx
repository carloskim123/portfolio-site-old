import React from "react";
import ValidateForm from "../../auth_handlers/ValidateForm"
import { Container } from '@chakra-ui/react'


export default function ValidatePage() {
    return (
        <Container>
            <ValidateForm />
        </Container>
    );
}

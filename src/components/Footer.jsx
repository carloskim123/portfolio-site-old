import React from 'react';
import { Box, Center, Text, Link, Flex } from '@chakra-ui/react';
import { pg_lk, loadNewWindow } from '../../data/db';
import "../app.css"


const Footer = () => {

    return (
        <Box
            className='footer'
            bg="teal.500"
            py={4}
            textAlign="center"
            width="100%"
            backdropFilter="blur(12px)"
            background="rgba(0, 0, 0, 0.01)"
        >
            <Box>
                <Box>
                    &copy; 2023 Carlos Kirui. All rights reserved.
                    <Flex justify="center" mt={2} _hover={{ cursor: "pointer" }} gap={"1rem"}>
                        {pg_lk.map((link, index) => (
                            <a key={index} transition={".4s ease-in-out"} _hover={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => loadNewWindow(link.url)} textDecoration="none" mr={4}>
                                {link.pathname}
                            </a>
                        ))}

                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;

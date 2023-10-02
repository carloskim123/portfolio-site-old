import React from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import {portfolio_url} from '../../data/db'
const Footer = () => {
    return (
        <Box
            color="black"
            py={4}
            textAlign="center"
            bottom="0"
            width="100%"
            // top={100}
            position={"fixed"}
            zIndex={100}
            backdropFilter="blur(12px)"
            background="rgba(0, 0, 0, 0.01)"
        >
            <Center>
                <Text >&copy; 2023 <a style={{textDecoration: "none"}} href={portfolio_url}>Carlos Kirui</a> All rights reserved.</Text>
            </Center>
        </Box>
    );
};

export default Footer;

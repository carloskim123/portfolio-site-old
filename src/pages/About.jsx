import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Box,
  Image,
  Text
} from '@chakra-ui/react';

import { accordionContent, profile_pic } from '../../data/db';
import { useLocation, useNavigate } from 'react-router-dom';


export default function About() {

  return (
    <div>
      <Box>
        <Container maxW={{ base: '100%', md: '900px' }} textAlign="center" mt="2rem">
          <Box display="flex" justifyContent="center">
            <Image src={profile_pic} rounded="sm" h={{ base: '100px', md: '130px' }} />
          </Box>
          <Box textAlign="center" pt="1rem">
            <Text fontSize={{ base: '20px', md: '25px' }}>Hey there, I'm Carlos, nice to meet you!</Text>
          </Box>
          <Box fontSize={{ base: '16px', md: '18px' }} pt="1rem">
            I'm a 15 - year-old web developer with a passion for creating and solving problems. I love the challenge of finding creative solutions to complex problems, and I'm always looking to learn new things and improve my skills. 
          </Box>
        </Container>
        <Container mt="2rem">
          <Accordion allowToggle>
            {accordionContent.map((accordion, index) => (
              <AccordionItem key={index} border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontSize={{ base: '18px', md: '20px' }}>
                      {accordion.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize="16px">
                  {accordion.content}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </Box>
    </div>
  );
}

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Container,
  Box,
  Text,
  Heading,
  Image
} from '@chakra-ui/react';

export default function About() {
  return (
    <div className='abt' >
      <Box>
        <Container>
          <Box>
            <Box fontFamily={"mono"}>
              Hey, nice to meet you.
            </Box>
          </Box>
        </Container>
        <Container>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Why I chose to program over everything else!
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                I chose to program because it combines my love of problem-solving and creativity. There's something so satisfying about taking a complex problem and breaking it down into manageable pieces. And with programming, the possibilities are endless - I can create anything I can imagine
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Did i make the right decision??
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                I think that programming is an excellent choice for many reasons. First and foremost, it's a field that's constantly evolving and growing, so there's always something new to learn. It's also a field that requires a lot of creativity and problem-solving skills, which are great skills to have in any profession. And of course, it can be incredibly rewarding to see your code come to life and solve real-world problems.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    What are the challenges of being a programmer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                There are many challenges to being a programmer, but some of the most common ones include:

                * The constant learning curve: The field of programming is constantly evolving, so programmers need to be constantly learning new things.
                * The need for problem-solving skills: Programmers need to be able to identify and solve problems.
                * The long hours: Programming can be a demanding career, and programmers often work long hours.
                * The stress: Programming can be stressful, especially when deadlines are tight.

                Despite the challenges, being a programmer can be a very rewarding career. Programmers have the opportunity to create new and innovative things, and they can make a real impact on the world.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>

    </div>
  )
}

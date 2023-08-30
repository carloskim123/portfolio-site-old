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


import { profile_pic } from '../../data/db'

export default function About() {
  return (
    <div>
      <Box h={"100vh"} >
        <Container textAlign={"center"} w={"900px"} mt={"2rem"} >
          <Box display={"flex"} justifyContent={"center"}>
            <Image src={profile_pic} rounded={"sm"} h={"130px"} />
          </Box>
          <Box textAlign={"center"} pt={"1rem"}>
            <Text fontSize={"25px"}>Hey there, I'm Carlos, nice to meet you!</Text>
          </Box>
          <Box fontSize={"18px"} pt={"1rem"}>
            I'm a 15-year-old web developer with a passion for creating and solving problems. I love the challenge of finding creative solutions to complex problems, and I'm always looking to learn new things and improve my skills. With a can-do attitude and a strong work ethic, I'm ready to take on any challenge.
          </Box>
        </Container>
        <Container mt={"2rem"}>
          <Accordion>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left' fontSize={"20px"}>
                    Why I chose to program over everything else!
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} fontSize={"16px"}>
                I chose to program because it combines my love of problem-solving and creativity. There's something so satisfying about taking a complex problem and breaking it down into manageable pieces. And with programming, the possibilities are endless - I can create anything I can imagine
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize={"20px"}>

                    Did i make the right decision??
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
                <AccordionPanel pb={4} fontSize={"16px"}>


                I think that programming is an excellent choice for many reasons. First and foremost, it's a field that's constantly evolving and growing, so there's always something new to learn. It's also a field that requires a lot of creativity and problem-solving skills, which are great skills to have in any profession. And of course, it can be incredibly rewarding to see your code come to life and solve real-world problems.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left' fontSize={"20px"}>

                    What are the challenges of being a programmer?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
                <AccordionPanel pb={4} fontSize={"16px"}>

                There are many challenges to being a programmer, but some of the most common ones include:<br/>

                * The constant learning curve: The field of programming is constantly evolving, so programmers need to be constantly learning new things.<br />
                * The need for problem-solving skills: Programmers need to be able to identify and solve problems.<br />
                * The long hours: Programming can be a demanding career, and programmers often work long hours.<br />
                * The stress: Programming can be stressful, especially when deadlines are tight.<br />
                <br />

                Despite the challenges, being a programmer can be a very rewarding career. Programmers have the opportunity to create new and innovative things, and they can make a real impact on the world.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Container>
      </Box>

    </div>
  )
}

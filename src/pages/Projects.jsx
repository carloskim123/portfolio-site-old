import { Grid, Box, Image, Link, Text } from "@chakra-ui/react";
import { projects } from "../../data/projects_data";
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import "../app.css"; // Import your CSS file for the transition styles

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false)
  }, 500);
  
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4} p={"20px"} >
      {projects.map((project) => (
        <CSSTransition
          key={project.id}
          in={!isLoading}
          timeout={400}
          classNames="fade"
        >
          {!isLoading ? (
            <Box key={project.id} p={4} borderColor={"#2b2d42"} shadow={"md"} borderWidth="1px" borderRadius="md" transition={"300ms"} _hover={{ shadow: "2xl", skewX: "10deg" }} fontSize={"17px"}>
              <Box position="relative" height="200px">
                <Image
                  src={project.img}
                  alt={project.name}
                  objectFit="cover"
                  layout="fill"
                  rounded="md"
                />
              </Box>
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                {project.name}
              </Text>
              <Text mb={2}>{project.description}</Text>
              <Text mb={2}>
                <Link href={project.project_url} color="blue.500" mr={2}>
                  Project Repo
                </Link>
                {project.view_live && (
                  <Link href={project.view_live} color="blue.500">
                    View Live
                  </Link>
                )}
              </Text>
              <Text>Tech Stack: {project.tech_stack}</Text>
            </Box>
          ) : (
            <Skeleton height={"400px"} rounded={"md"} />
          )}
        </CSSTransition>
      ))}
    </Grid>
  );
}

export default Projects

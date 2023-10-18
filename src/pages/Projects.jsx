import { Grid, Box, Image, Link, Text } from "@chakra-ui/react";
import { projects } from "../../data/projects_data";
import { Skeleton } from "@chakra-ui/react";
import { useState } from "react";
// import "../app.css"; // Import your CSS file for the transition styles
import { shuffle } from "../../data/helpers";
import { useNavigate } from 'react-router-dom'


const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);

  const shuffledProjects = shuffle(projects);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <Grid
      templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      gap={6}
      p={"20px"}
      pb={"10rem"}
    >
      {shuffledProjects.map((project) => (
        <div key={project.id}>
          {!isLoading ? (
            <Box
              mb={"3rem"}
              key={project?.id}
              p={4}
              borderColor={"#2b2d42"}
              shadow={"sm"}
              borderWidth="1px"
              transition={"150ms"}
              _hover={{
                shadow: "2xl",
                cursor: "pointer",
                transform: "translateY(-10px)",
                rounded: "sm",
              }}
              fontSize={"17px"}
              h="445px" // Set a fixed height for all project boxes
            >
              <Box position="relative" height="200px">
                <Image
                  src={project?.img}
                  minWidth={"100%"}
                  maxHeight={"100%"}
                  alt={project?.name}
                  objectFit="contain"
                  layout="fill"
                />
              </Box>
              <Text fontWeight="bold" fontSize="2xl" mb={2}>
                {project?.name}
              </Text>
              <Text mb={2}>{project?.description}</Text>
              <Box>
                <div key={project.id}>
                  <Link target="_blank" href={project?.project_url} color="blue.500" mr={2}>
                    🔗 Project Repo
                  </Link>

                  {project.view_live != null && <Link target="_blank" href={project?.view_live} color="blue.500">
                    🔗 View Live
                  </Link>}
                </div>
              </Box>
              <Text>Tech Stack: {project?.tech_stack}</Text>
            </Box>
          ) : (
            <Skeleton height={"445px"} rounded={"none"} />
          )}
        </div>
      ))}
    </Grid>
  );
};

export default Projects;

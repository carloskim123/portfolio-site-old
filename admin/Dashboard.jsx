import React, { useState, useEffect } from "react";
import {
    getAllProjectsData,
    createProject,
    updateProject,
    deleteProject,
} from "../services/_api_data";
import {
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Link,
    Input,
    Box,
    Container,
    Heading,
    FormControl,
    FormLabel,
    TableContainer,
    Flex,
    Tooltip
} from "@chakra-ui/react";

export const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [newProjectData, setNewProjectData] = useState({
        name: "",
        description: "",
        tech_stack: "",
        project_url: "",
        view_live: "",
        img: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editedProjectData, setEditedProjectData] = useState({
        _id: null,
        name: "",
        description: "",
        tech_stack: "",
        project_url: "",
        view_live: "",
        img: "",
    });

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase().trim()) ||
        project.tech_stack.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    useEffect(() => {
        getAllProjectsData(setProjects);
    }, []);

    const handleRefresh = () => {
        getAllProjectsData(setProjects);
    };

    const handleDelete = async (projectId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (!confirmDelete) {
            return;
        }

        const success = await deleteProject(projectId, setProjects);

        if (success) {
            alert("Project deleted successfully.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send a POST request to create a new project
        const createdProject = await createProject(newProjectData, setProjects);

        if (createdProject) {
            alert("Project created successfully.");
            // Clear the input fields after successful creation
            setNewProjectData({
                name: "",
                description: "",
                tech_stack: "",
                project_url: "",
                view_live: "",
                img: "",
            });
        }
    };

    const handleEdit = (project) => {
        setEditedProjectData({
            _id: project._id,
            name: project.name,
            description: project.description,
            tech_stack: project.tech_stack,
            project_url: project.project_url,
            view_live: project.view_live,
            img: project.img,
        });
        setIsEditing(true);
    };

    const handleUpdate = async () => {
        const success = await updateProject(editedProjectData._id, editedProjectData, setProjects);

        if (success) {
            alert("Project updated successfully.");
            setIsEditing(false);
            // Clear the input fields after successful update
            setEditedProjectData({
                _id: null,
                name: "",
                description: "",
                tech_stack: "",
                project_url: "",
                view_live: "",
                img: "",
            });
        }
    };

    return (
        <Container maxW={"100%"}>
            <Box
                mt={"3.79em"}
                h="60px"
                top={0}
                width={"100%"}
                position={"fixed"}
                zIndex={40}
            >
                <form
                    onSubmit={(e) => e.preventDefault()}
                    px={4}
                    h="60px"
                    w={"100%"}
                    top={0}
                    position={"fixed"}
                    zIndex={100}
                >
                    <Input
                        backdropFilter="blur(10px)"
                        background="rgba(0, 0, 0, 0.001)"
                        variant={"unstyled"}
                        padding={"7px"}
                        fontSize={"20px"}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Search projects"
                        rounded={"none"}
                        borderBottom={"2px solid black"}
                        borderTop={"none"}
                        outline={"none"}
                        _placeholder={{
                            color: "black",
                        }}
                        fontFamily={"Klee One"}
                    />
                </form>
            </Box>
            <TableContainer spacing="3" margin={"0 auto"}>
                <Heading as="h1" size="xl">
                    Project Dashboard
                </Heading>
                <Button colorScheme="green" onClick={handleRefresh}>
                    Refresh
                </Button>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Description</Th>
                            <Th>Tech Stack</Th>
                            <Th>Project URL</Th>
                            <Th>View Live</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {filteredProjects.map((project) => (
                            <Tr key={project._id}>
                                <Td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {project.name}
                                </Td>
                                <Td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {project.description}
                                </Td>
                                <Td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {project.img}
                                </Td>
                                <Td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {project.tech_stack}
                                </Td>
                                <Td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    <Link href={project.project_url} target="_blank" rel="noopener noreferrer">
                                        Visit Project
                                    </Link>
                                </Td>
                                <Td style={{ maxWidth: "200px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {project.view_live ? (
                                        <Link href={project.view_live} target="_blank" rel="noopener noreferrer">
                                            View Live
                                        </Link>
                                    ) : (
                                        ""
                                    )}
                                </Td>
                                <Td>
                                    <Button mr={"2rem"} colorScheme="red" bg="none" onClick={() => handleDelete(project._id)} _hover={{ bg: "none" }}>
                                        <Tooltip label="delete" placement={"auto-start"} >
                                            🗑️
                                        </Tooltip>
                                    </Button>
                                    <Button mr={"2rem"} bg={"none"} onClick={() => handleEdit(project)} _hover={{ bg: "none" }}>
                                        <Tooltip label="edit" placement={"auto-start"} >
                                            🖋️
                                        </Tooltip>
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Box mt="8">
                <Flex>
                    {isEditing ? (
                        <Box>
                            <Heading as="h2" size="lg">Edit Project: {editedProjectData.name}</Heading>
                            <FormControl>
                                <Input
                                    marginTop={"2rem"}
                                    w={"900px"}
                                    variant={"flushed"}
                                    _placeholder={{
                                        color: "black"
                                    }}
                                    type="text"
                                    placeholder="Enter name..."
                                    value={editedProjectData.name}
                                    onChange={(e) => setEditedProjectData({ ...editedProjectData, name: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    marginTop={"2rem"}
                                    w={"900px"}
                                    variant={"flushed"}
                                    _placeholder={{
                                        color: "black"
                                    }}
                                    type="text"
                                    placeholder="Description...."
                                    value={editedProjectData.description}
                                    onChange={(e) => setEditedProjectData({ ...editedProjectData, description: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    marginTop={"2rem"}
                                    w={"900px"}
                                    variant={"flushed"}
                                    _placeholder={{
                                        color: "black"
                                    }}
                                    type="text"
                                    placeholder="Tech Stack...."
                                    value={editedProjectData.tech_stack}
                                    onChange={(e) => setEditedProjectData({ ...editedProjectData, tech_stack: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    marginTop={"2rem"}
                                    w={"900px"}
                                    variant={"flushed"}
                                    _placeholder={{
                                        color: "black"
                                    }}
                                    type="text"
                                    placeholder="Project URL...."
                                    value={editedProjectData.project_url}
                                    onChange={(e) => setEditedProjectData({ ...editedProjectData, project_url: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    marginTop={"2rem"}
                                    w={"900px"}
                                    variant={"flushed"}
                                    _placeholder={{
                                        color: "black"
                                    }}
                                    type="text"
                                    placeholder="View Live URL...."
                                    value={editedProjectData.view_live}
                                    onChange={(e) => setEditedProjectData({ ...editedProjectData, view_live: e.target.value })}
                                />
                            </FormControl>
                            <FormControl>
                                <Input
                                    marginTop={"2rem"}
                                    w={"900px"}
                                    variant={"flushed"}
                                    _placeholder={{
                                        color: "black"
                                    }}
                                    type="text"
                                    placeholder="Img...."
                                    value={editedProjectData.img}
                                    onChange={(e) => setEditedProjectData({ ...editedProjectData, img: e.target.value })}
                                />
                            </FormControl>
                            <Button type="button" colorScheme="green" onClick={handleUpdate}>Update Project</Button>
                            <Button colorScheme="gray" onClick={() => setIsEditing(false)}>Done</Button>
                        </Box>
                    ) : (
                        <Box>
                            <Heading as="h2" size="lg">Create New Project</Heading>
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <Input
                                        marginTop={"2rem"}
                                        w={"900px"}
                                        variant={"flushed"}
                                        _placeholder={{
                                            color: "black"
                                        }}
                                        type="text"
                                        placeholder="Enter name..."
                                        value={newProjectData.name}
                                        onChange={(e) => setNewProjectData({ ...newProjectData, name: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        marginTop={"2rem"}
                                        w={"900px"}
                                        variant={"flushed"}
                                        _placeholder={{
                                            color: "black"
                                        }}
                                        type="text"
                                        placeholder="Description...."
                                        value={newProjectData.description}
                                        onChange={(e) => setNewProjectData({ ...newProjectData, description: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        marginTop={"2rem"}
                                        w={"900px"}
                                        variant={"flushed"}
                                        _placeholder={{
                                            color: "black"
                                        }}
                                        type="text"
                                        placeholder="Tech Stack...."
                                        value={newProjectData.tech_stack}
                                        onChange={(e) => setNewProjectData({ ...newProjectData, tech_stack: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        marginTop={"2rem"}
                                        w={"900px"}
                                        variant={"flushed"}
                                        _placeholder={{
                                            color: "black"
                                        }}
                                        type="text"
                                        placeholder="Project URL...."
                                        value={newProjectData.project_url}
                                        onChange={(e) => setNewProjectData({ ...newProjectData, project_url: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        marginTop={"2rem"}
                                        w={"900px"}
                                        variant={"flushed"}
                                        _placeholder={{
                                            color: "black"
                                        }}
                                        type="text"
                                        placeholder="View Live URL...."
                                        value={newProjectData.view_live}
                                        onChange={(e) => setNewProjectData({ ...newProjectData, view_live: e.target.value })}
                                    />
                                </FormControl>
                                <FormControl>
                                    <Input
                                        marginTop={"2rem"}
                                        w={"900px"}
                                        variant={"flushed"}
                                        _placeholder={{
                                            color: "black"
                                        }}
                                        type="text"
                                        placeholder="Img...."
                                        value={newProjectData.img}
                                        onChange={(e) => setNewProjectData({ ...newProjectData, img: e.target.value })}
                                    />
                                </FormControl>
                                <Button type="submit" colorScheme="blue">Create Project</Button>
                            </form>
                        </Box>
                    )}
                </Flex>
            </Box>
        </Container>
    );
};

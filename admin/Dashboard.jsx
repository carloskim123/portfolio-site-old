import React, { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import {
    getAllProjectsData,
    createProject,
    updateProject,
    deleteProject,
} from "./data";


export const Dashboard = () => {
    const [data, setData] = useState([]);
    const [newProject, setNewProject] = useState({
        name: "",
        description: "",
        img: "",
        project_url: "",
        tech_stack: "",
        view_live: ""
    });

    useEffect(() => {
        getAllProjectsData(setData);
    }, []);

    const handleCreateProject = () => {
        createProject(newProject, setData);
    }

    const handleUpdateProject = (projectId, updatedData) => {
        updateProject(projectId, updatedData, setData);
    }

    const handleDeleteProject = (projectId) => {
        deleteProject(projectId, setData);
    }

    return (
        <Container>
            <button onClick={() => getAllProjectsData(setData)}>Get Data</button>
            {data.map(item => (
                <div key={item._id}>
                    <div>{item.name}</div>
                    <button onClick={() => handleUpdateProject(item._id, { name: "Updated Name" })}>Update</button>
                    <button onClick={() => handleDeleteProject(item._id)}>Delete</button>
                </div>
            ))}
            <h2>Create a New Project</h2>
            <input
                type="text"
                placeholder="Name"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Description"
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
            <input
                type="text"
                placeholder="img"
                value={newProject.img}
                onChange={(e) => setNewProject({ ...newProject, img: e.target.value })}
            />
            <input
                type="text"
                placeholder="project url"
                value={newProject.project_url}
                onChange={(e) => setNewProject({ ...newProject, project_url: e.target.value })}
            />
            <input
                type="text"
                placeholder="view project"
                value={newProject.view_live}
                onChange={(e) => setNewProject({ ...newProject, view_live: e.target.value })}
            />
            <input
                type="text"
                placeholder="tech stack"
                value={newProject.tech_stack}
                onChange={(e) => setNewProject({ ...newProject, tech_stack: e.target.value })}
            />
            <button onClick={handleCreateProject}>Create Project</button>
        </Container>
    );
};

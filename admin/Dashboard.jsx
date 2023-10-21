import React, { useState, useEffect } from "react";
import {
    getAllProjectsData,
    createProject,
    updateProject,
    deleteProject,
} from "./data";

export const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [newProjectData, setNewProjectData] = useState({
        name: "",
        description: "",
        tech_stack: "",
        project_url: "",
        view_live: "",
        img: "",
    });

    useEffect(() => {
        // Fetch projects data when the component mounts
        getAllProjectsData(setProjects);
    }, []);

    const handleDelete = async (projectId) => {
        // Confirm deletion with the user
        const confirmDelete = window.confirm("Are you sure you want to delete this project?");
        if (!confirmDelete) {
            return;
        }

        // Send a DELETE request to delete the project
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

    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: 1, marginRight: "20px" }}>
                <h1>Project Dashboard</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Tech Stack</th>
                            <th>Project URL</th>
                            <th>View Live</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project._id}>
                                <td>{project.name}</td>
                                <td>{project.description}</td>
                                <td>{project.tech_stack}</td>
                                <td>
                                    <a href={project.project_url} target="_blank" rel="noopener noreferrer">
                                        Visit Project
                                    </a>
                                </td>
                                <td>
                                    <a href={project.view_live} target="_blank" rel="noopener noreferrer">
                                        View Live
                                    </a>
                                </td>
                                <td>Project Image</td>
                                <td>
                                    <button onClick={() => handleDelete(project._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ flex: 1 }}>
                <h2>Create New Project</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={newProjectData.name}
                        onChange={(e) => setNewProjectData({ ...newProjectData, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newProjectData.description}
                        onChange={(e) => setNewProjectData({ ...newProjectData, description: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Tech Stack"
                        value={newProjectData.tech_stack}
                        onChange={(e) => setNewProjectData({ ...newProjectData, tech_stack: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Project URL"
                        value={newProjectData.project_url}
                        onChange={(e) => setNewProjectData({ ...newProjectData, project_url: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="View Live URL"
                        value={newProjectData.view_live}
                        onChange={(e) => setNewProjectData({ ...newProjectData, view_live: e.target.value })}
                    />
                    <button type="submit">Create Project</button>
                </form>
            </div>
        </div>
    );
};

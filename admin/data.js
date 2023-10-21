const allDataUrl = "http://localhost:8000/api/projects"
const sendNewDataUrl = "http://localhost:8000/api/projects/new"
const updateDataUrl = "http://localhost:8000/api/projects/edit/"
const deleteDataUrl = "http://localhost:8000/api/projects/delete/"
const getOneItem = "http://localhost:8000/api/projects/project/"

export const getAllProjectsData = async (setData) => {
    try {
        const response = await fetch(allDataUrl, {
            method: 'GET'
        });

        if (response.ok) {
            const data = await response.json();
            setData(data);
        } else {
            console.error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

export const createProject = async (projectData, setData) => {
    try {
        console.log(projectData)
        const response = await fetch(sendNewDataUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        });

        if (response.ok) {
            // const createdProject = await response.json();
            // setData((prevData) => [...prevData, createdProject]);
            // return createdProject;
            console.log("project created")
        } else {
            console.error(`Failed to create a project. Status: ${response.status}`);
            return null;
        }
    } catch (err) {
        console.error('An error occurred:', err);
        return null;
    }
}


export const updateProject = async (projectId, updatedData, setData) => {
    try {
        const response = await fetch(`${updateDataUrl}${projectId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });

        if (response.ok) {
            getAllProjectsData(setData);
        } else {
            console.error(`Failed to update the project. Status: ${response.status}`);
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

export const deleteProject = async (projectId, setData) => {
    try {
        const response = await fetch(`${deleteDataUrl}${projectId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            getAllProjectsData(setData);
        } else {
            console.error(`Failed to delete the project. Status: ${response.status}`);
        }
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

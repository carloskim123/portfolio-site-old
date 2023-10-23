import {
    REACT_APP_ALL_DATA_URL,
    REACT_APP_SEND_NEW_DATA_URL,
    REACT_APP_UPDATE_DATA_URL,
    REACT_APP_DELETE_DATA_URL,
    REACT_APP_GET_ONE_ITEM
} from './variables'


export const allDataUrl = REACT_APP_ALL_DATA_URL
const sendNewDataUrl = REACT_APP_SEND_NEW_DATA_URL
const updateDataUrl = REACT_APP_UPDATE_DATA_URL
const deleteDataUrl = REACT_APP_DELETE_DATA_URL
const getOneItem = REACT_APP_GET_ONE_ITEM



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

export const createProject = async (projectData) => {
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




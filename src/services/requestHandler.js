import axios from "axios";
const BASE_URL = "http://localhost:3001";

export const fetchData = async(endpoint) => {
    const maxRetries = 5;
    let retries = 0;
    while (retries < maxRetries)
    {
        try {
            const response = await axios.get(`${BASE_URL}/${endpoint}`);
            console.log("axios", response.data);
            return response.data;
        } catch (error) {
            retries++;
            console.log(error);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    console.error("Couldn't reach the database");
    return null;
};

export const fetchOneData = async(endpoint, id) => {
    const maxRetries = 5;
    let retries = 0;
    while (retries < maxRetries)
    {
        try {
            const response = await axios.get(`${BASE_URL}/${endpoint}/${id}`);
            console.log("axios", response.data);
            return response.data;
        } catch (error) {
            retries++;
            console.log(error);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    console.error("Couldn't reach the database");
    return null;
};



export const postRequest = async(endpoint, data) => {
    console.log("postRequest", data);
    axios.post(`${BASE_URL}/${endpoint}`, data)
    .then(response => {
        console.log("axios", response.data);
        return response.data;
    })
    .catch(error => {
        console.error('Error making POST request:', error);
        return null;
    });
}

export const putRequest = async(endpoint, id, data) => {
    axios.put(`${BASE_URL}/${endpoint}/${id}`, data)
    .then(response => {
        console.log("axios",response.data);
        return response.data;
    })
    .catch(error => {
        console.error('Error making PUT request:', error);
        return null;
    });
}

export const deleteRequest = async(endpoint, id) => {
    axios.delete(`${BASE_URL}/${endpoint}/${id}`)
    .then(response => {
        console.log("axios",response.data);
        return response.data;
    })
    .catch(error => {
        console.error('Error making DELETE request:', error);
        return null;
    });
}


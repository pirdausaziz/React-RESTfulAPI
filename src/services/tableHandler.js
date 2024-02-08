import axios from "axios";
const BASE_URL = "http://localhost:3001";

export const fetchTableList = async(endpoint) => {
    const maxRetries = 5;
    let retries = 0;
    while (retries < maxRetries)
    {
        try {
            const response = await axios.get(`${BASE_URL}/${endpoint}`);
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

export const fetchColumnList = async(endpoint, tableName) => {
    const maxRetries = 5;
    let retries = 0;
    while (retries < maxRetries)
    {
        try {
            const response = await axios.get(`${BASE_URL}/${endpoint}/column/${tableName}`);
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

export const fetchPrimaryKey = async(endpoint, tableName) => {
    const maxRetries = 5;
    let retries = 0;
    while (retries < maxRetries)
    {
        try {
            const response = await axios.get(`${BASE_URL}/${endpoint}/key/${tableName}`);
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

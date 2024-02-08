const { pool } = require('../Utils/databaseUtils')

const getAllSubjects = async () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM subject";
        pool.query(query, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        });
    });
};

const getSubject = async (id) => {
    return new Promise((resolve, reject) => {  
        const query = 
        "SELECT * FROM subject \
        WHERE subject_id = $1";

        pool.query(query, [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        });
    });
}

const postSubject = async (data) => {
    const { name, code } = data;
    return new Promise((resolve, reject) => {
        const query = 
        "INSERT INTO subject \
        (name, code) \
        VALUES \
        ($1, $2)";

        pool.query(query, [name, code], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};


const putSubject = async (data, id) => {
    const { name, code } = data;
    return new Promise((resolve, reject) => {
        const query = 
        "UPDATE subject \
        SET name = $1, code = $2 \
        WHERE subject_id = $3";

        pool.query(query, [name, code, id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const deleteSubject = async (id) => {
    return new Promise((resolve, reject) => {
        const query = 
        "DELETE FROM subject \
        WHERE subject_id = $1";

        pool.query(query, [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });

    });
};

module.exports = { 
    getAllSubjects, 
    getSubject, 
    postSubject, 
    putSubject, 
    deleteSubject };
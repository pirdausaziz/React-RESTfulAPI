const { pool } = require('../Utils/databaseUtils');

const getAllTeachers = async () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM teacher";

        pool.query(query, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        });

    });
};

const getTeacher = async (id) => {
    return new Promise((resolve, reject) => {  
        const query = 
        "SELECT * FROM teacher \
        WHERE teacher_id = $1";

        pool.query(query, [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        });
    });
}
            

const postTeacher = async (data) => {
    console.log("Database", data);
    const { name, matrix, age, experience } = data;
    return new Promise((resolve, reject) => {
        const query = 
        "INSERT INTO teacher \
        (name, matrix, age, experience) \
        VALUES \
        ($1, $2, $3, $4)";

        pool.query(query, [name, matrix, age, experience], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};


const putTeacher = async (data, id) => {
    console.log("Database", data);
    const { name, matrix, age, experience } = data;
    return new Promise((resolve, reject) => {
        const query = 
        "UPDATE teacher \
        SET name = $1, matrix = $2, age = $3, experience = $4 \
        WHERE teacher_id = $5";

        pool.query(query, [name, matrix, age, experience, id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const deleteTeacher = async (id) => {
    return new Promise((resolve, reject) => {
        const query = 
        "DELETE FROM teacher \
        WHERE teacher_id = $1";

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
    getAllTeachers, 
    getTeacher, 
    postTeacher, 
    putTeacher, 
    deleteTeacher };
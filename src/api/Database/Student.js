const { pool } = require('../Utils/databaseUtils')

const getAllStudents = async () => {
    return new Promise((resolve, reject) => {
        const query = "SELECT * FROM student";
        pool.query(query, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        });
    });
};

const getStudent = async (id) => {
    return new Promise((resolve, reject) => {  
        const query = 
        "SELECT * FROM student \
        WHERE student_id = $1";

        pool.query(query, [id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        });
    });
}

const postStudent = async (data) => {
    const { name, matrix, age, course } = data;
    return new Promise((resolve, reject) => {
        const query = 
        "INSERT INTO student \
        (name, matrix, age, course) \
        VALUES \
        ($1, $2, $3, $4)";

        pool.query(query, [name, matrix, age, course], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};


const putStudent = async (data, id) => {
    const { name, matrix, age, course } = data;
    return new Promise((resolve, reject) => {
        const query = 
        "UPDATE student \
        SET name = $1, matrix = $2, age = $3, course = $4 \
        WHERE student_id = $5";

        pool.query(query, [name, matrix, age, course, id], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

const deleteStudent = async (id) => {
    return new Promise((resolve, reject) => {
        const query = 
        "DELETE FROM student \
        WHERE student_id = $1";

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
    getAllStudents, 
    getStudent, 
    postStudent, 
    putStudent, 
    deleteStudent };
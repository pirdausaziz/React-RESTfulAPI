const studentDB = require("../Database/Student");

const getAllStudents = async () => {
        const allTeachers = await studentDB.getAllStudents();
        return allTeachers;
};

const getStudent = async (id) => {
        const student = await studentDB.getStudent(id);
        return student;
};

const postStudent = async (data) => {
        const newStudent = await studentDB.postStudent(data);
        return newStudent;
};

const putStudent = async (data, id) => {
        const editedStudent = await studentDB.putStudent(data, id);
        return editedStudent;
};

const deleteStudent = async (id) => {
        const deletedStudent = await studentDB.deleteStudent(id);
        return deletedStudent;
};

module.exports = { 
        getAllStudents, 
        getStudent, 
        postStudent, 
        putStudent, 
        deleteStudent};

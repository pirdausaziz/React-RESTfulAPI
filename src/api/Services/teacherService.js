const teacherDB = require("../Database/Teacher");

const getAllTeachers = async () => {
        const allTeachers = await teacherDB.getAllTeachers();
        return allTeachers;
};

const getTeacher = async (id) => {
        const teacher = await teacherDB.getTeacher(id);
        return teacher;
};

const postTeacher = async (data) => {
        const createTeacher = await teacherDB.postTeacher(data);
        return createTeacher;
};

const putTeacher = async (data, id) => {
        const updateTeacher = await teacherDB.putTeacher(data, id);
        return updateTeacher;
};

const deleteTeacher = async (id) => {
        const deleteTeacher = await teacherDB.deleteTeacher(id);
        return deleteTeacher;
};

module.exports = { getAllTeachers, getTeacher, postTeacher, putTeacher, deleteTeacher };
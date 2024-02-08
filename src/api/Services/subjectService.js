const subjectDB = require("../Database/Subject");

const getAllSubjects = async () => {

    const allSubjects = await subjectDB.getAllSubjects();
    return allSubjects;
};

const getSubject = async (id) => {
    const subject = await subjectDB.getSubject(id);
    return subject;
};

const postSubject = async (data) => {
    const newSubject = await subjectDB.postSubject(data);
    return newSubject;
};

const putSubject = async (data, id) => {
    const editedSubject = await subjectDB.putSubject(data, id);
    return editedSubject;
};

const deleteSubject = async (id) => {
    const deletedSubject = await subjectDB.deleteSubject(id);
    return deletedSubject;
};

module.exports = { 
    getAllSubjects, 
    getSubject, 
    postSubject, 
    putSubject, 
    deleteSubject
};
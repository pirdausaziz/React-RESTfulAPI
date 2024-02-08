const studentService = require("../Services/studentService");
const errorHandler = require("../Utils/errorHandler");
const utils = require("../Utils/controllerUtils");

const getAllStudents = async (req, res) => {
    utils.getAllElements(res, studentService.getAllStudents());
};

const getStudent = async (req, res) => {
    const { id } = req.params;
    if (isNaN(id))
    {
        return errorHandler.statusError_400(res, "ID is not a number");
    }
    console.log("Getting student with id", id);
    utils.getElement(res, studentService.getStudent, id);
}

const postStudent = async (req, res) => {
    const { body } = req;
    const { name, matrix, age, course } = body;
    if (    !name ||
            !matrix ||
            !age ||
            !course)
    {
        return errorHandler.statusError_400(res, "One or some keys is missing");
    }
    console.log("Creating student with", body);
    utils.postElement(res, studentService.postStudent, body);
};

const putStudent = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const { name, matrix, age, course } = body;
    console.log("studentController", body);
    if (    !name ||
            !matrix ||
            !age ||
            !course)
    {
        return errorHandler.statusError_400(res, "One or some keys is missing");
    }
    console.log("Editing student with", body, "and id", id);
    utils.putElement(res, studentService.putStudent, body, id);
}

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    if (isNaN(id))
    {
        return errorHandler.statusError_400(res, "ID is not a number");
    }
    console.log("Deleting student with id", id);
    utils.deleteElement(res, studentService.deleteStudent, id);
}

module.exports = {

    getAllStudents,
    getStudent,
    postStudent,
    putStudent,
    deleteStudent};
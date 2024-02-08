const teacherService = require("../Services/teacherService");
const utils = require("../Utils/controllerUtils");
const errorHandler = require("../Utils/errorHandler");

const getAllTeachers = async (req, res) => {
    utils.getAllElements(res, teacherService.getAllTeachers());
};

const getTeacher = async (req, res) => {
    const { id } = req.params;
    if (isNaN(id))
    {
        return errorHandler.statusError_400(res, "ID is not a number");
    }
    console.log("Getting teacher with id", id);
    utils.getElement(res, teacherService.getTeacher, id);
}

const postTeacher = async (req, res) => {
    const { body } = req;
    const { name, matrix, age, experience } = body;
    if (    !name ||
            !matrix ||
            !age ||
            !experience)
    {
        return errorHandler.statusError_400(res, "One or some keys is missing");
    }
    console.log("Creating teacher with", body);
    utils.postElement(res, teacherService.postTeacher, body);
};

const putTeacher = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const { name, matrix, age, experience } = body;
    console.log("teacherController", body);
    if (    !name ||
            !matrix ||
            !age ||
            !experience)
    {
        return errorHandler.statusError_400(res, "One or some keys is missing");
    }
    console.log("Editing teacher with", body, "and id", id);
    utils.putElement(res, teacherService.putTeacher, body, id);
}

const deleteTeacher = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    if (isNaN(id))
    {
        return errorHandler.statusError_400(res, "ID is not a number");
    }
    console.log("Deleting teacher with id", id);
    utils.deleteElement(res, teacherService.deleteTeacher, id);
}

module.exports = { 
    getAllTeachers, 
    getTeacher, 
    postTeacher, 
    putTeacher, 
    deleteTeacher };
const subjectService = require("../Services/subjectService");
const errorHandler = require("../Utils/errorHandler");
const utils = require("../Utils/controllerUtils");

const getAllSubjects = async (req, res) => {
    utils.getAllElements(res, subjectService.getAllSubjects());
}

const getSubject = async (req, res) => {
    const { id } = req.params;
    if (isNaN(id))
    {
        return errorHandler.statusError_400(res, "ID is not a number");
    }
    console.log("Getting subject with id", id);
    utils.getElement(res, subjectService.getSubject, id);
}

const postSubject = async (req, res) => {
    const { body } = req;
    const { name, code } = body;
    if (    !name ||
            !code)
    {
        return errorHandler.statusError_400(res, "One or some keys is missing");
    }
    console.log("Creating subject with", body);
    utils.postElement(res, subjectService.postSubject, body);
};

const putSubject = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    const { name, code } = body;
    console.log("subjectController", body);
    if (    !name ||
            !code)
    {
        return errorHandler.statusError_400(res, "One or some keys is missing");
    }
    console.log("Editing subject with", body, "and id", id);
    utils.putElement(res, subjectService.putSubject, body, id);
};

const deleteSubject = async (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    if (isNaN(id))
    {
        return errorHandler.statusError_400(res, "ID is not a number");
    }
    console.log("Deleting subject with id", id);
    utils.deleteElement(res, subjectService.deleteSubject, id);
};

module.exports = {
    getAllSubjects,
    getSubject,
    postSubject,
    putSubject,
    deleteSubject
};
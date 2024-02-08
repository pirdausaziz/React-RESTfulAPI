const getAllElements = async (res, service) => {
    service
    .then(allElements => res.status(200).send({ status: "OK", data: allElements }))
    .catch(error => {
        return res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: {error: error?.message || error}});
    });
};

const getElement = async (res, service, id) => {
    service(id)
        .then(allElements => res.status(200).send({ status: "OK", data: allElements }))
        .catch(error => {
            return res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    });
};

const postElement = async (res, service, body) => {
    service(body)
        .then(allElement => res.status(201).send({ status: "OK", data: allElement }))
        .catch(error => {
            return res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    });
};

const putElement = async (res, service, body, id) => {
    service(body, id)
        .then(allElements => {
            return res.status(201).send({ status: "OK", data: allElements })
        })
        .catch(error => {
            return res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    });
};

const deleteElement = async (res, service, id) => {
    service(id)
        .then(allElements => {
            return res.status(200).send({ status: "OK", data: allElements })
        })
        .catch(error => {
            return res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    });
}


module.exports = { 
    getAllElements, 
    getElement, 
    postElement, 
    putElement,
    deleteElement };

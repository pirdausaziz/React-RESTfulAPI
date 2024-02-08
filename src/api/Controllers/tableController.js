const tableService = require('../Services/tableService');

const getTables = async (req, res) => {
    tableService.getTables()
        .then(allElements => res.status(200).send({ status: "OK", data: allElements }))
        .catch(error => {
            return res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    });
}

const getColumn = async (req, res) => {
    const { tableName } = req.params;
    tableService.getColumn(tableName)
        .then(allElements => res.status(200).send({ status: "OK", data: allElements }))
        .catch(error => {
            return res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    });
};

const getKey = async (req, res) => {
    const { tableName } = req.params;
    tableService.getKey(tableName)
        .then(allElements => res.status(200).send({ status: "OK", data: allElements }))
        .catch(error => {
            return res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: {error: error?.message || error}});
    });
};

module.exports = { getTables, getColumn, getKey };
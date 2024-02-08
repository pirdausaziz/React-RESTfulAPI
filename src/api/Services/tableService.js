const TableDB = require('../Database/Table');

const getTables = async () => {
    const allColumns = await TableDB.getTables();
    return allColumns;
}

const getColumn = async (tableName) => {
    const columnNames = await TableDB.getColumn(tableName);
    return columnNames;
};

const getKey = async (tableName) => {
    const columnNames = await TableDB.getKey(tableName);
    return columnNames;
};

module.exports = { getTables, getColumn, getKey };
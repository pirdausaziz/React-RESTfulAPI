const { fetchTableList, fetchColumnList, fetchPrimaryKey } = require("../services/tableHandler"); 

export const getTableName = async () => {
    try {
        const subjectList = await fetchTableList("api/table");
        return subjectList.data;
    } catch (error) {
        console.error(error);
    }
};

export const getPrimaryKeys = async (tableName) => {
    try {
        const primaryKey = await fetchPrimaryKey("api/table", tableName);
        return primaryKey.data[0].attname;
    } catch (error) {
        console.error(error);
    }
}

export const getColumnsList = async (tableName) => {
    try {
        const columnList = await fetchColumnList("api/table", tableName);
        const primaryKey = await getPrimaryKeys(tableName);
        const newColumnList = columnList.data.filter((column) => column !== primaryKey);
        return newColumnList;
    } catch (error) {
        console.log(error);
    }
};

export const getTableAndColumn = async () => {
    const subjectsTemp = await getTableName();
    const columnsTempPromises = subjectsTemp.map(getColumnsList);
    const columnsTemp = await Promise.all(columnsTempPromises);
    return {subjects: subjectsTemp, columns: columnsTemp};
};
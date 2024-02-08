const { pool } = require('../Utils/databaseUtils');

const getTables = async () => {
    return new Promise((resolve, reject) => {
        const query = 
        "SELECT DISTINCT table_name \
        FROM information_schema.columns \
        WHERE table_catalog = 'adminDB' \
        AND table_schema = 'public'";

        pool.query(query, (error, result) => {
            if (error) {
                reject(error);
            } else {
                const tableNames = result.rows.map(row => row.table_name);
                resolve(tableNames);
            }
        });
    });
}

const getColumn = async (tableName) => {
    return new Promise((resolve, reject) => {
        const query = 
        "SELECT column_name \
        FROM information_schema.columns \
        WHERE table_name = $1";

        pool.query(query, [tableName], (error, result) => {
            if (error) {
                reject(error);
            } else {
                const columnNames = result.rows.map(row => row.column_name);
                resolve(columnNames);
            }
        });
    });
};

const getKey = async (tableName) => {
    return new Promise((resolve, reject) => {
        const query = 
        "SELECT a.attname, format_type(a.atttypid, a.atttypmod) AS data_type \
        FROM pg_index i \
        JOIN pg_attribute a ON a.attrelid = i.indrelid \
        AND a.attnum = ANY(i.indkey) \
        WHERE i.indrelid = $1::regclass \
        AND i.indisprimary";

        pool.query(query, [tableName], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result.rows);
            }
        });
    });
};

module.exports = { getTables, getColumn, getKey };
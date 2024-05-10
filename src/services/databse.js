import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const databaseName = "ProFinance.db";
const databaseVersion = "1.0";
const databaseDisplayName = "SQLite ProFinance Database";
const databaseSize = 200000;

export const getDBConnection = async () => {
    return SQLite.openDatabase(
        databaseName,
        databaseVersion,
        databaseDisplayName,
        databaseSize
    );
};

export const createTable = async (db) => {
    // Cria a tabela de usuários se não existir
    const query = `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(30),
        password VARCHAR(30)
    );`;
    await db.executeSql(query);
};

export const setupDatabase = async () => {
    const db = await getDBConnection();
    await createTable(db);
    return db;
};

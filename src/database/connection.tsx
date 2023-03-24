import * as SQLite from 'expo-sqlite';

export const Connection = {
    getConnection: () => SQLite.openDatabase("database.db"),
};
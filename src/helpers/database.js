import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("users.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists users (name varchar(100), email text unique not null, password varchar(100) not null);",
        // "DROP TABLE users;",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const registerUserIntoDatabase = (name, email, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "insert into users (name, email, password) values (?, ?, ?);",
        [name, email, password],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const logUserIntoDatabase = (email, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        // "select * from users",
        "select * from users where email = ? and password = ?",
        [email, password],
        // [],

        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

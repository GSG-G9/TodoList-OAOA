BEGIN;
DROP TABLE IF EXISTS users, tasks, todoList CASCADE;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  firstName VARCHAR(33)  NOT NULL,
  lastName VARCHAR(33) NOT NULL,
  email VARCHAR(55) NOT NULL UNIQUE,
  password VARCHAR(33) NOT NULL,
  createdAt DATE NOT NULL
);
CREATE TABLE todoLists(
  id SERIAL PRIMARY KEY,
  title VARCHAR(33) NOT NULL,
  userId INTEGER REFERENCES users(id) ON UPDATE CASCADE
);
CREATE TABLE tasks(
  id SERIAL PRIMARY KEY,
  details VARCHAR(33) NOT NULL,
  status BOOLEAN  DEFAULT false,
  todoListId INTEGER REFERENCES todoLists(id) ON UPDATE CASCADE
);

COMMIT;
BEGIN;

DROP TABLE IF EXISTS 'Users', 'Projects', 'Sections', 'Tasks', 'User_Tasks', 'User_Projects' CASCADE;

CREATE TABLE 'Users' (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  birthDate DATE,
  bio VARCHAR(255),
);

CREATE TABLE 'Projects' (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
);

CREATE TABLE 'Sections' (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  color VARCHAR(255),
  project_id INTEGER NOT NULL,
  FOREIGN KEY (project_id) REFERENCES Projects(id) ON DELETE CASCADE
);

CREATE TABLE 'Tasks' (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  priority VARCHAR(255),
  endDate DATE,
  status VARCHAR(255),
  section_id INTEGER NOT NULL,
  FOREIGN KEY (section_id) REFERENCES Sections(id) ON DELETE CASCADE
);

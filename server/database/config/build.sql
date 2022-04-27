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




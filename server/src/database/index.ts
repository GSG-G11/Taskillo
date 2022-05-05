import {
  signUpQuery,
  checkEmailQuery,
  addProjectQuery,
  addUserProjectsQuery,
  getProjectsQuery,
  deleteProjectQuery,
  editProjectQuery,
  deleteTaskQuery,
  addSectionQuery,
} from './quieres';

import { connection, buildDb } from './config';

export {
  checkEmailQuery,
  addProjectQuery,
  addUserProjectsQuery,
  deleteProjectQuery,
  getProjectsQuery,
  editProjectQuery,
  deleteTaskQuery,
  signUpQuery,
  connection,
  buildDb,
  addSectionQuery,
};

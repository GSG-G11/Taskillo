import {
  signUpQuery,
  checkEmailQuery,
  addProjectQuery,
  addUserProjectsQuery,
  getProjectsQuery,
  deleteProjectQuery,
  editProjectQuery,
  deleteTaskQuery,
  getSpecificProjectQuery,
  getMembersQuery,
} from './quieres';

import { connection, buildDb } from './config';

export {
  checkEmailQuery,
  addProjectQuery,
  addUserProjectsQuery,
  getSpecificProjectQuery,
  deleteProjectQuery,
  getMembersQuery,
  getProjectsQuery,
  editProjectQuery,
  deleteTaskQuery,
  signUpQuery,
  connection,
  buildDb,
};

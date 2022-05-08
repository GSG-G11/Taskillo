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
  deleteSectionQuery,
  editSectionQuery,
  editTaskQuery,
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
  editTaskQuery,
  connection,
  buildDb,
  addSectionQuery,
  deleteSectionQuery,
  editSectionQuery,
};

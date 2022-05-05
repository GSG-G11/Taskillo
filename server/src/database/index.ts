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
  getProjectSectionsQuery,
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
  deleteSectionQuery,
  editSectionQuery,
  getProjectSectionsQuery,
};

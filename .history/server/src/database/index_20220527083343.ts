import {
  signUpQuery,
  checkEmailQuery,
  addProjectQuery,
  addUserProjectsQuery,
  getProjectsQuery,
  getSpecificProjectQuery,
  editProjectQuery,
  deleteProjectQuery,
  addTaskQuery,
  getTasksQuery,
  editTaskQuery,
  getTasksSectionQuery,
  deleteTaskQuery,
  getMembersQuery,
  addSectionQuery,
  getOneSectionQuery,
  getProjectSectionsQuery,
  editSectionQuery,
  deleteSectionQuery,
  addUserTaskQuery,
  getCheckMembersQuery,
  dragTaskQuery,
  getAllTasksQuery,
  updateImageQuery,
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
  getTasksQuery,
  getTasksSectionQuery,
  deleteTaskQuery,
  signUpQuery,
  editTaskQuery,
  connection,
  buildDb,
  addTaskQuery,
  addSectionQuery,
  deleteSectionQuery,
  getOneSectionQuery,
  editSectionQuery,
  getProjectSectionsQuery,
  addUserTaskQuery,
  getCheckMembersQuery,
  dragTaskQuery,
  updateImageQuery,
};

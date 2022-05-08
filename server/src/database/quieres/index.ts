import {
  addProjectQuery,
  addUserProjectsQuery,
  getProjectsQuery,
  deleteProjectQuery,
  editProjectQuery,
  getSpecificProjectQuery,
  getMembersQuery,
} from './projects';

import { checkEmailQuery, signUpQuery } from './userQueries';

import {
  getTasksQuery,
  getTasksSectionQuery,
  editTaskQuery,
  deleteTaskQuery,
} from './tasks';
import {
  addSectionQuery,
  deleteSectionQuery,
  editSectionQuery,
} from './sections';

export {
  checkEmailQuery,
  signUpQuery,
  addProjectQuery,
  getProjectsQuery,
  deleteProjectQuery,
  editProjectQuery,
  getTasksQuery,
  getTasksSectionQuery,
  deleteTaskQuery,
  addUserProjectsQuery,
  getMembersQuery,
  getSpecificProjectQuery,
  addSectionQuery,
  deleteSectionQuery,
  editSectionQuery,
  editTaskQuery,
};

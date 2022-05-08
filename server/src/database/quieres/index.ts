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
  addTaskQuery,
  getTasksQuery,
  getTasksSectionQuery,
  editTaskQuery,
  deleteTaskQuery,
} from './tasks';

import {
  addSectionQuery,
  deleteSectionQuery,
  editSectionQuery,
  getProjectSectionsQuery,
  getOneSectionQuery,
} from './sections';

export {
  signUpQuery,
  checkEmailQuery,
  addProjectQuery,
  getProjectsQuery,
  getSpecificProjectQuery,
  editProjectQuery,
  deleteProjectQuery,
  addTaskQuery,
  getTasksQuery,
  getTasksSectionQuery,
  editTaskQuery,
  deleteTaskQuery,
  addUserProjectsQuery,
  getMembersQuery,
  addSectionQuery,
  getOneSectionQuery,
  getProjectSectionsQuery,
  editSectionQuery,
  deleteSectionQuery,
};

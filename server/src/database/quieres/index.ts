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
  getProjectSectionsQuery,
  getOneSectionQuery,
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
  getOneSectionQuery,
  editSectionQuery,
  getProjectSectionsQuery,
  editTaskQuery,
};

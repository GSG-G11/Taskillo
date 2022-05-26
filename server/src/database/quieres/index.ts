import {
  addProjectQuery,
  addUserProjectsQuery,
  getProjectsQuery,
  deleteProjectQuery,
  editProjectQuery,
  getSpecificProjectQuery,
  getMembersQuery,
  getCheckMembersQuery,
} from './projects';

import { checkEmailQuery, signUpQuery, updateImageQuery } from './users';
import {
  addTaskQuery,
  getTasksQuery,
  getTasksSectionQuery,
  editTaskQuery,
  deleteTaskQuery,
  addUserTaskQuery,
  dragTaskQuery,
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
  addUserTaskQuery,
  getCheckMembersQuery,
  dragTaskQuery,
  updateImageQuery,
};

import {
  getTasks, getTasksSection, editTask, deleteTask,
} from './tasks';
import { login, signup, sendEmailController } from './user';

import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  getSpecificProject,
} from './projects';

import {
  addSectionController,
  deleteSectionController,
  editSectionController,
  getProjectSectionsController,
} from './sections';

export {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  login,
  signup,
  addSectionController,
  deleteSectionController,
  editSectionController,
  getProjectSectionsController,
  sendEmailController,
  getTasksSection,
  getTasks,
  editTask,
  deleteTask,
  getSpecificProject,
};

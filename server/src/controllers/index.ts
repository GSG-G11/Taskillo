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
} from './sections';

export {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  login,
  signup,
  sendEmailController,
  getTasksSection,
  getTasks,
  editTask,
  deleteTask,
  getSpecificProject,
  addSectionController,
  deleteSectionController,
  editSectionController,
};

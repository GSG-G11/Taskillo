import { getTasks, getTasksSection, editTask, deleteTask } from './tasks';
import { login, signup, sendEmailController } from './user';

import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
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
  login,
  signup,
  editProject,
  addSectionController,
  deleteSectionController,
  editSectionController,
  deleteTask,
  editTask,
  sendEmailController,
  getTasksSection,
  getTasks,
};

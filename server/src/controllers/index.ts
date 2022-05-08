import {
  addTask, getTasks, getTasksSection, editTask, deleteTask,
} from './tasks';
import { login, signup, sendEmail } from './user';

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
  addTask,
  addSectionController,
  deleteSectionController,
  editSectionController,
  getProjectSectionsController,
  sendEmail,
  getTasksSection,
  getTasks,
  editTask,
  deleteTask,
  getSpecificProject,
};

import {
  addTask, getTasks, getTasksSection, editTask, deleteTask,
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
  addSection,
  deleteSection,
  editSection,
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
  addSection,
  deleteSection,
  editSection,
  getProjectSectionsController,
  sendEmailController,
  getTasksSection,
  getTasks,
  editTask,
  deleteTask,
  getSpecificProject,
};

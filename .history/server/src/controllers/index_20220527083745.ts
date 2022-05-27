import {
  addTask,
  getTasks,
  getTasksSection,
  editTask,
  deleteTask,
  dragTask,
  getAllTasks,
} from './tasks';
import { login, signup, sendEmail, updateImage } from './users';

import {
  addProject,
  getProjects,
  deleteProject,
  editProject,
  getSpecificProject,
  getProjectMembers,
} from './projects';

import {
  addSection,
  deleteSection,
  editSection,
  getProjectSections,
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
  getProjectSections,
  sendEmail,
  getTasksSection,
  getTasks,
  editTask,
  deleteTask,
  dragTask,
  getSpecificProject,
  getProjectMembers,
  updateImage,
  getAllTasks,
};

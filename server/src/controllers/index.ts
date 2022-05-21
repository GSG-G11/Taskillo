import {
  addTask, getTasks, getTasksSection, editTask, deleteTask,
} from './tasks';
import { login, signup, sendEmail } from './users';

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
  getSpecificProject,
  getProjectMembers,
};

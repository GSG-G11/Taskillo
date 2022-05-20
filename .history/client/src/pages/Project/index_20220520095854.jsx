import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { Menu } from '../../components/UI';
import { Outlet } from 'react-router-dom';

const Project = () => {
  const projectData = useSelector((state) => state.project.value);
  const { open } = useSelector((state) => state.sidebar.value);

  useEffect(() => {
    localStorage.setItem('currentProject', JSON.stringify(projectData.name));
  }, [projectData.name]);

  const projectName = projectData.name || JSON.parse(localStorage.getItem('currentProject'));

  return (
    <div className="page-container">
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`  ${projectName} `} />
        <Menu />
        <Outlet />
      </main>
    </div>
  );
};

export default Project;

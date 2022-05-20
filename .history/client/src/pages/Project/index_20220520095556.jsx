import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { Menu } from '../../components/UI';
import { Outlet } from 'react-router-dom';

const Project = () => {
  useEffect(() => {
    localStorage.setItem('currentProject', JSON.stringify(projectData.name));
  }, [projectData.name]);

  const projectData = useSelector((state) => state.project.value);
  const { open } = useSelector((state) => state.sidebar.value);
  return (
    <div className="page-container">
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={` ${projectData.name}`} />
        {console.log(projectData.name)}
        <Menu />
        <Outlet />
      </main>
    </div>
  );
};

export default Project;

import React from 'react';
import { Navbar } from '../../components';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';
import { Menu } from '../../components/UI';

export default function Project() {
  const projectData = useSelector((state) => state.project.value);
  const { open } = useSelector((state) => state.sidebar.value);

  return (
    <div className="page-container d-flex flex-row">
      <div className={open ? 'sidebar' : 'sidebar close'}>
        <Sidebar />
      </div>
      <div className={`page ${open ? 'page-content' : 'page-content-close'}`}>
        <Navbar title={` ${projectData.name}`} />
        <Menu />
        <Outlet />
      </div>
    </div>
  );
}

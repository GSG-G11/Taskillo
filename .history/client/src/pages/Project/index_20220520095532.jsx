import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import { Menu } from '../../components/UI';
import { Outlet } from 'react-router-dom';

const Project = () => {
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
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

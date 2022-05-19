import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from '../../components';
import Sidebar from '../../state/sidebar';

export default function Projects() {
  const { open } = useSelector((state) => state.sidebar.value);
  const userInfo = useSelector((state) => state.user.value);

  return (
    <div className="page-container">
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`Good Morning, ${userInfo.username}`} />
      </main>
    </div>
  );
}

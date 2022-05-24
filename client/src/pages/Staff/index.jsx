import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import styled from 'styled-components';
import SingleStaff from '../../components/SingleStaff';
import { AddProjectModal } from '../../components';

const Staff = () => {
  const { open } = useSelector((state) => state.sidebar.value);
  const { userProjects } = useSelector((state) => state.userProjects.value);

  return (
    <div className='page-container'>
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`Staff`} />
        <AddProjectModal />

        <section className='page-content'  style={{paddingBottom: 0}}>
          <Staffs className='staffs'>
            {
              userProjects.map(({id, name}) => (
                <SingleStaff key={id} project={{id, name}} />
              ))
            }
          </Staffs>
        </section>
      </main>
    </div>
  );
};

const Staffs = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding-bottom: 3rem;
  max-width: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar-track {
    background-color: rgba(57, 57, 83, 0.475);
    border-radius: .4rem;
  }
  &::-webkit-scrollbar {
    height: .9rem;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #53535e;
    border-radius: .4rem;
  }
`;

export default Staff;

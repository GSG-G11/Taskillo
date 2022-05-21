import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import StaffHeader from '../../components/StaffHeader';
import styled from 'styled-components';
import StaffMember from '../../components/StaffMember';
import userImage from '../../images/user.jfif';
import axios from 'axios';

const Staff = () => {
  const { open } = useSelector((state) => state.sidebar.value);
  const { userProjects } = useSelector((state) => state.userProjects.value);

  useEffect(() => {
    const getProjectMembers = async () => {
      
    }
  })

  return (
    <div className='page-container'>
      <Sidebar />
      <main className={open ? 'main-page' : 'main-page close'}>
        <Navbar title={`Staff`} />
        <section className='page-content'  style={{paddingBottom: 0}}>
          <Staffs className='staffs'>
            <div className='single-staff'>
              <StaffHeader name='Graduation Project' />
              <div className='staff-memebers'>
                <StaffMember
                  user={{
                    image: userImage,
                    name: 'Dev.karam',
                    role: 'Admin',
                  }}
                />
                <StaffMember
                  user={{
                    image: userImage,
                    name: 'Dev.karam',
                    role: 'Admin',
                  }}
                />
                <StaffMember
                  user={{
                    image: userImage,
                    name: 'Dev.karam',
                    role: 'Admin',
                  }}
                />
                <StaffMember
                  user={{
                    image: userImage,
                    name: 'Dev.karam',
                    role: 'Admin',
                  }}
                />
              </div>
            </div>
            {
              userProjects.map(({id, name}) => (
                <div className="single-staff" key={id}>
                  <StaffHeader name={name} />
                  <div className="staff-memebers">

                  </div>
                </div>
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

  .single-staff {
    min-width: 330px;
    margin-right: 2rem;

    .staff-memebers {
      max-height: 66vh;
      overflow: auto;
      padding-right: 1rem;
      padding-bottom: 0.5rem;

      &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 1rem;
      }
      &::-webkit-scrollbar {
        width: 5px;
        background-color: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #323239;
        border-radius: 1rem;
      }
    }
  }
`;

export default Staff;

import React from 'react';
import Navbar from '../../components/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import StaffHeader from '../../components/StaffHeader';
import styled from 'styled-components';
import StaffMember from '../../components/StaffMember';
import userImage from '../../images/user.jfif';

const Staff = () => {
  const { open } = useSelector((state) => state.sidebar.value);
  return (
    <div className="page-container">
      <Sidebar />
      <main
        className={
          open ? 'main-page' : 'main-page close'
        }
      >
        <Navbar title={`Staff`} />
        <section className="page-content">
          <Staffs className="staffs">
            <div className="single-staff">
              <StaffHeader name='Graduation Project' />
              <div className="staff-memebers">
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
              </div>
            </div>
            <div className="single-staff">
              <StaffHeader name='Movflix Team' />
              <div className="staff-memebers">
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
              </div>
            </div>
            <div className="single-staff">
              <StaffHeader name='Taskillo Team' />
              <div className="staff-memebers">
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                <StaffMember user={
                  {
                    image: userImage, name: 'Dev.karam', role: 'Admin'
                  }
                } />
                
              </div>
            </div>
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

  .single-staff{
    min-width: 330px;
    margin-right: 2rem;
  }
`

export default Staff;

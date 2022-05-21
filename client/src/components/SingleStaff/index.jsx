import StaffMember from '../../components/StaffMember';
import userImage from '../../images/user.jfif';
import StaffHeader from '../../components/StaffHeader';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const SingleStaff = ({ project: { id, name } }) => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    const getProjectMembers = async () => {
      const response = await axios.get(`/api/v1/project/${id}/members`);
      setMembers(response.data.data.rows);
    };
    getProjectMembers();
  }, [id]);

  return (
    <SingleStafWrapper className='single-staff'>
      <StaffHeader name={name} />
      <div className='staff-memebers'>
        {members.map(({ username, role }) => (
          <StaffMember
            user={{
              image: userImage,
              name: username,
              role,
            }}
          />
        ))}
      </div>
    </SingleStafWrapper>
  );
};

const SingleStafWrapper = styled.div`
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
`;

export default SingleStaff;

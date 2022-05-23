import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { setProject } from '../../state/project.js';
import generateAvatarColor from '../../utils/generateAvatarColor';
import { RiTwitterFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Overview = () => {
  const { id } = useParams();
  const [avatarColor, setAvatarColor] = useState('');
  const projectData = useSelector((state) => state.project.value);
  const dispatch = useDispatch();
  const projectOwner = projectData?.staff?.find(
    (staff) => staff.role === 'owner'
  );
  useEffect(() => {
    if (projectOwner?.username) {
      setAvatarColor(generateAvatarColor(projectOwner.username));
    }
  }, [projectOwner]);

  useEffect(() => {
    async function getProject(projectid) {
      try {
        const {
          data: {
            data: { rows, staff },
          },
          status,
        } = await axios.get(`/api/v1/project/${projectid}`);
        if (status === 200) {
          dispatch(
            setProject({
              name: rows[0].name,
              description: rows[0].description,
              staff: staff,
            })
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
    getProject(id);
  }, [dispatch, id]);

  return (
    <OverviewContainer>
      <div className='project-info'>
        <div className='project-owner'>
          <div className='image-div'>
            {projectOwner?.image ? (
              <img src={projectOwner.image} alt='project owner' />
            ) : (
              <div className='avatar' style={{ backgroundColor: avatarColor }}>
                <span>{projectOwner?.username[0].toUpperCase()}</span>
              </div>
            )}
          </div>
          <div className='owner-info'>
            <h3 className='owner-name'>{projectOwner?.username}</h3>
            <div className='social-links'>
              <a
                href={projectOwner?.twitter}
                target='_blank'
                rel='noopener noreferrer'>
                <RiTwitterFill />
              </a>
              <a
                href={projectOwner?.linkedin}
                target='_blank'
                rel='noopener noreferrer'>
                <RiLinkedinFill />
              </a>
              <a
                href={projectOwner?.github}
                target='_blank'
                rel='noopener noreferrer'>
                <RiGithubFill />
              </a>
            </div>
          </div>
        </div>
        <div className='project-description'>
          <div className='desc-container'>
            <h3 className='project-name'>{projectData?.name}</h3>
            <p className='project-desc'>{projectData?.description}</p>
          </div>
        </div>
      </div>
      <div className='project-members'>
        <h3 className='project-members-title'>Project Members</h3>
        <Splide
          options={{
            type: 'slide',
            perPage: 3,
            padding: '10%',
            gap: '1.5rem',
            perMove: 3,
            drag: 'free',
            pagination: false,
            arrows: false,
          }}>
          {projectData?.staff?.map((member) => (
            <SplideSlide key={member.id}>
              <div className='project-member'>
                <div className='image-div'>
                  {member?.image ? (
                    <img src={member.image} alt='project member' />
                  ) : (
                    <div
                      className='avatar'
                      style={{ backgroundColor: generateAvatarColor(member?.username) }}>
                      <span>{member?.username[0].toUpperCase()}</span>
                    </div>
                  )}
                </div>
                <div className='member-info'>
                  <h3 className='member-name'>{member?.username}</h3>
                  <h4 className='member-role'>{member?.role}</h4>
                  <div className='social-links'>
                    <a
                      href={member?.twitter}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <RiTwitterFill />
                    </a>
                    <a
                      href={member?.linkedin}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <RiLinkedinFill />
                    </a>
                    <a
                      href={member?.github}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <RiGithubFill />
                    </a>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </OverviewContainer>
  );
};

const OverviewContainer = styled.section`
  padding: 1rem 2rem;

  .project-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    .project-description {
      flex: 1;
      background-color: #21222c;
      padding: 1rem;
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      color: #fff;
      min-height: 220px;
      .project-name {
        font-size: 1.4rem;
        margin-bottom: 1rem;
      }
      .project-desc {
        font-size: 1rem;
        line-height: 1.5rem;
        color: #ccc;
      }
    }
  }

  .project-owner,
  .project-member {
    min-width: 250px;
    background-color: #21222c;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-right: 1rem;

    .image-div {
      display: flex;
      justify-content: center;
      align-items: center;

      .avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        font-size: 3rem;
        color: #fff;
        border-radius: 50%;
      }
    }

    .owner-info, .member-info {
      margin-top: 1rem;
      color: #fff;
      text-align: center;
      .owner-name, .member-name {
        font-size: 1.1rem;
      }
      .member-role {
        font-size: 0.9rem;
        color: #ccc;
      }

      .social-links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;

        a {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0 0.5rem;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          color: #fff;
          background-color: rgba(28, 28, 40, 0.88);
          transition: transform 0.3s;
          cursor: pointer;
          &:hover {
            transform: translateY(-4px) scale(1.1);
          }
        }
      }
    }
  }

  .project-members {
    color: #fff;

    .project-members-title {
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
`;

export default Overview;
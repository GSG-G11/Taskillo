import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Text } from '../../components';
import { setProject } from '../../state/project.js';

export default function Overview() {
  const projectData = useSelector((state) => state.project.value);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getProject = async (projectid) => {
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
  };

  useEffect(
    async (projectid) => {
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
    },
    [getProject, id]
  );

  return (
    <div>
      <Text text={projectData.name} className="text-white" />
      <Text text={projectData.description} className="text-white" />
    </div>
  );
}

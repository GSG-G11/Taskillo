import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import { Button } from '../UI';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSection } from '../../state/sections';
import { setEditSectionOpen, setTaskOpen } from '../../state/modal';
import Modal from '../Modal';
import { setAction } from '../../state/action';

export default function SectionHeader({ name, id }) {
  const { editSection: isEdit } = useSelector((state) => state.modal.value);
  const { sections } = useSelector((state) => state.sections.value);
  const { openTask } = useSelector((state) => state.modal.value);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const { id: projectId } = useParams();
  const dispatch = useDispatch();

  const deleteSection = async (sectionId) => {
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirm) {
      try {
        const response = await axios.delete(
          `/api/v1/project/${projectId}/section/${sectionId}`
        );
        const { id: deletedSectionId } = response.data.data[0];
        const newSections = sections.filter(
          (section) => section.id !== deletedSectionId
        );
        dispatch(setSection({ sections: newSections }));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const editSection = async (e) => {
    const { value } = e.target;
    try {
      const response = await axios.put(
        `/api/v1/project/${projectId}/section/${id}`,
        {
          name: value,
        }
      );
      const { id: sectionId } = response.data.data;
      const newSections = sections.map((section) => {
        if (section.id === sectionId) {
          return { ...section, name: value };
        } else return section;
      });
      dispatch(setSection({ sections: newSections }));
    } catch (error) {
      console.log(error);
    }
  };

  const addSection = async () => {
    dispatch(setTaskOpen(!openTask));
    dispatch(setAction({ type: 'Add' }));
  };

  const handleSubmit = async (task) => {
    ///project/:projectid/task
    console.log(task);
  };

  return (
    <Wrap className="wrap">
      <Title className="section-title">
        {isEdit ? (
          <input
            className="title-input"
            defaultValue={name}
            onBlur={() => dispatch(setEditSectionOpen(false))}
            onChange={(e) => editSection(e)}
          />
        ) : (
          <>
            <p onClick={() => dispatch(setEditSectionOpen(true))}>{name}</p>
            <div className="d-flex">
              <div className="icon-container">
                <AiOutlinePlus className="icon" onClick={addSection} />
              </div>
              <div className="icon-container">
                <FiMoreVertical
                  className="text-white more icon"
                  onClick={toggling}
                />
              </div>
            </div>
          </>
        )}
      </Title>
      <DropDown>
        {isOpen && (
          <div className="dropdown">
            <Button
              className="edit w-100"
              title="Edit"
              onClick={() => {
                dispatch(setEditSectionOpen(true));
                toggling();
              }}
            />
            <span className="line"></span>
            <Button
              type="button"
              className="delete w-100"
              title="Delete"
              onClick={() => {
                deleteSection(id);
                toggling();
              }}
            />
          </div>
        )}
      </DropDown>
      {openTask && <Modal handleSubmit={handleSubmit} />}
    </Wrap>
  );
}
const Wrap = styled.div`
  position: relative;
`;
const Title = styled.div`
  background: #21222c;
  color: #fff;
  width: 300px;
  padding: 8px;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button.section-header-btn {
    background: none;
  }
  p {
    margin-bottom: 0;
  }
  .more {
    font-size: 20px;
    margin-left: 0.2rem;
  }
  .icon {
    cursor: pointer;
  }
  .title-input {
    background: #323239;
    border: none;
    color: #fff;
    padding: 5px;
    width: 100%;
    border-radius: 5px;
    &:focus {
      border: none;
    }
    .icon-container:hover {
      background: red;
      padding: 5px;
    }
  }
`;
const DropDown = styled.div`
  background: #0d6efd;
  width: 35%;
  border-radius: 0 10px 10px 10px;
  position: absolute;
  z-index: 1;
  top: 35px;
  left: 282px;
  @media (max-width: 630px) {
    border-radius: 10px 0px 10px 10px;
    z-index: 1;
    left: 250px;
  }
  @media (max-width: 425px) {
    left: 200px;
  }
  @media (max-width: 320px) {
    left: 130px;
  }
  .dropdown {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 8px 0;
    .line {
      width: 100%;
      height: 1px;
      background: #fff;
    }
    .edit,
    .delete {
      padding: 8px 0;
      color: #fff;
    }
  }
`;

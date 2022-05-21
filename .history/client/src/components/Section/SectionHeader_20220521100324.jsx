import React, { useState } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import { Button } from '../UI';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSection } from '../../state/sections';

export default function SectionHeader({ name, id, setClicked }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const { id: projectId } = useParams();
  const { sections } = useSelector((state) => state.sections.value);
  const dispatch = useDispatch();

  const deleteSection = (sectionId) => {
    const confirm = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirm) {
      axios
        .delete(`/api/v1/project/${projectId}/section/${sectionId}`)
        .then((res) => {
          const {id: deletedSectionId} = res.data.data[0];
          const newSections = sections.filter(section => section.id !== deletedSectionId);
          dispatch(setSection({sections: newSections}));
        })
        .catch((err) => console.log(err)); 
    }
  };

  return (
    <Wrap className="wrap">
      <Title className="section-title">
        {isEdit ? (
          <input
            className="title-input"
            defaultValue={name}
            onBlur={() => setIsEdit(false)}
            active="true"
          />
        ) : (
          <>
            <p onClick={() => setIsEdit(true)}>{name}</p>
            <div className="d-flex">
              <div className="icon-container">
                <AiOutlinePlus className="icon" />
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
                setIsEdit(true);
                toggling();
              }}
            />
            <span className="line"></span>
            <Button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="delete w-100"
              title="Delete"
              onClick={() => {
                deleteSection(id);
                console.log(id);
                toggling();
              }}
            />
          </div>
        )}
      </DropDown>
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

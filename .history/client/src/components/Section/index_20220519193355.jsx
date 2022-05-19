import React from 'react';
import SectionName from './SectionName';
import Cards from '../Card/Cards';
import styled from 'styled-components';

export default function Section() {
  return (
    // <Div>
    //   <div className="section">
    //     <SectionName name="To do" />
    //     <div>
    //       <Cards />
    //     </div>
    //   </div>
    // </Div>
    <div className="app">
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => {
          return (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map(({ id, title, description }, index) => {
                return (
                  <Draggable key={id} draggableId={title} index={index}>
                    {(provided) => {
                      return (
                        <Cards />
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          );
        }}
      </Droppable>
    </DragDropContext>
  </div>
  );
}

const Div = styled.div`
  .section {
    color: #fff;
  }
`;

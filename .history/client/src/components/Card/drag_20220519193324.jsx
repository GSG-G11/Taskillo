import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const list = [
  {
    id: 1,
    title: 'title1',
    description: 'desc1',
  },
  {
    id: 2,
    title: 'title2',
    description: 'desc2',
  },
  {
    id: 3,
    title: 'title3',
    description: 'desc3',
  },
];

function Card() {
  const [todos, setTodos] = useState(list);
  function handleOnDragEnd({ source, destination }) {
    if (!destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);

    setTodos(items);
  }

  return (
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

export default Card;

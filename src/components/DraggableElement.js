import React from 'react';
import { useDrag } from 'react-dnd';
import { Box } from '@mui/material';

const DraggableElement = ({ element, isSelected, handleClick, handleDelete, handleConfigure }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { element },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        border: isSelected ? '2px solid red' : 'none',
        cursor: 'move',
      }}
      onClick={() => handleClick(element.id)}
      onContextMenu={(e) => {
        e.preventDefault();
        handleDelete(element.id);
      }}
      onDoubleClick={() => handleConfigure(element.id)}
    >
      <div>{element.type}</div>
    </Box>
  );
};

export default DraggableElement;

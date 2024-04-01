import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { useDrop } from 'react-dnd';
import DraggableElement from '../components/DraggableElement';
import Modal from '../components/Modal';

const Page = () => {
  const [elements, setElements] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({});

  useEffect(() => {
    // Retrieve elements from local storage on component mount
    const storedElements = JSON.parse(localStorage.getItem('elements'));
    if (storedElements) {
      setElements(storedElements);
    }
  }, []);

  useEffect(() => {
    // Save elements to local storage whenever it changes
    localStorage.setItem('elements', JSON.stringify(elements));
  }, [elements]);

  const handleDrop = (element) => {
    setElements([...elements, element]);
  };

  const handleElementClick = (elementId) => {
    setSelectedElement(elementId);
    localStorage.setItem('selectedElement', elementId);
  };

  const handleDelete = () => {
    const updatedElements = elements.filter(element => element.id !== selectedElement);
    setElements(updatedElements);
    setSelectedElement(null);
    localStorage.removeItem('selectedElement');
  };

  const handleConfigure = (elementId) => {
    // Open modal for configuration editing
    const selectedElement = elements.find(element => element.id === elementId);
    setModalConfig(selectedElement);
    setIsModalOpen(true);
  };

  const drop = useDrop({
    accept: 'element',
    drop: (item) => handleDrop(item.element),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  })[1]; 


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveModalChanges = (config) => {
    const updatedElements = elements.map(element => {
      if (element.id === selectedElement) {
        return { ...element, ...config };
      }
      return element;
    });
    setElements(updatedElements);
    setIsModalOpen(false);
  };

  return (
    <Paper
      elevation={3}
      ref={drop}
      sx={{ width: 'calc(100% - 280px)', height: '80vh', margin: '20px', padding: '20px' }}
      onDragOver={(e) => e.preventDefault()}
    >
      {elements.map((element) => (
        <DraggableElement
          key={element.id}
          element={element}
          isSelected={selectedElement === element.id}
          handleClick={handleElementClick}
          handleDelete={handleDelete}
          handleConfigure={handleConfigure}
        />
      ))}
      <Modal
        open={isModalOpen}
        handleClose={closeModal}
        handleSave={saveModalChanges}
        initialConfig={modalConfig}
      />
    </Paper>
  );
};

export default Page;

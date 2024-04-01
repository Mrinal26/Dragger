import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const ModalComponent = ({ open, handleClose, handleSave, initialConfig }) => {
  const [config, setConfig] = useState(initialConfig);

  const handleChange = (e) => {
    setConfig({ ...config, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleSave(config);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, width: 400 }}>
        <Typography variant="h6" gutterBottom>
          Configure Element
        </Typography>
        <TextField fullWidth margin="normal" label="X Coordinate" variant="outlined" name="x" value={config.x} onChange={handleChange} />
        <TextField fullWidth margin="normal" label="Y Coordinate" variant="outlined" name="y" value={config.y} onChange={handleChange} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalComponent;

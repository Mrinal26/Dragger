import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import InputIcon from '@mui/icons-material/Input';
import SaveIcon from '@mui/icons-material/Save';

const Sidebar = ({ handleExport }) => {
  return (
    <Paper elevation={3} sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Components
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <DragIndicatorIcon />
          </ListItemIcon>
          <ListItemText primary="Label" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TextFieldsIcon />
          </ListItemIcon>
          <ListItemText primary="Input" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <InputIcon />
          </ListItemIcon>
          <ListItemText primary="Button" />
        </ListItem>
      </List>
      <Button startIcon={<SaveIcon />} variant="contained" color="primary" onClick={handleExport}>
        Export
      </Button>
    </Paper>
  );
};

export default Sidebar;

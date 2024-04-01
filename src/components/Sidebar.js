import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { DragIndicator, TextFields, Input, Save } from '@mui/icons-material';

const Sidebar = ({ handleExport }) => {
  return (
    <Paper elevation={3} sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Components
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <DragIndicator />
          </ListItemIcon>
          <ListItemText primary="Label" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TextFields />
          </ListItemIcon>
          <ListItemText primary="Input" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Input />
          </ListItemIcon>
          <ListItemText primary="Button" />
        </ListItem>
      </List>
      <Button startIcon={<Save />} variant="contained" color="primary" onClick={handleExport}>
        Export
      </Button>
    </Paper>
  );
};

export default Sidebar;

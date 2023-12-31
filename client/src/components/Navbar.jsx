import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SettingsAccessibilityRoundedIcon from '@mui/icons-material/SettingsAccessibilityRounded';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SettingsAccessibilityRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FriendSpace
          </Typography>
            <Button color="inherit">
                <Link to='/register'> Register </Link>
            </Button>
            <Button color="inherit">
                <Link to='/login'> Login </Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
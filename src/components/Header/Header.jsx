// import * as React from 'react';
import { useState } from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from '@mui/material';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import MoreIcon from '@mui/icons-material/MoreVert';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import ContactsFilter from 'components/Filter/Filter';

export default function Header() {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const MyTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

  // const handleProfileMenuOpen = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <PersonAddIcon />
        </IconButton>
        <p>Add contact</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <LoginIcon />
        </IconButton>
        <p>LogIn</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
        <p>LogOut</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          // aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AppRegistrationIcon />
        </IconButton>
        <p>Registration</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* <AppBar position="static"> */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            sx={{ display: { xs: 'none', sm: 'block' } }}
            variant="h6"
            noWrap
            component="div"
          >
            PhoneBook
          </Typography>

          <ContactsFilter />

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <MyTooltip title="Add Contact">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <PersonAddIcon />
              </IconButton>
            </MyTooltip>

            <MyTooltip title="LogIn">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <LoginIcon />
              </IconButton>
            </MyTooltip>

            <MyTooltip title="LogOut">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <LogoutIcon />
              </IconButton>
            </MyTooltip>

            <MyTooltip title="Registration">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                // aria-controls={menuId}
                // aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AppRegistrationIcon />
              </IconButton>
            </MyTooltip>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}

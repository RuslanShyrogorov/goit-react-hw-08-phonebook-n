import { AppBar, Box, Toolbar } from '@mui/material';
import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

export function HeaderNew() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
          <UserMenu />
          <AuthNav />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { Box, IconButton } from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout';

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

export function UserMenuIcon() {
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

  return (
    <Box sx={{ display: 'flex' }}>
      <p>Welcome, Ruslan</p>
      <MyTooltip title="LogOut">
        <IconButton size="large" aria-label="logout" color="inherit">
          <LogoutIcon />
        </IconButton>
      </MyTooltip>
    </Box>
  );
}

import { Box, Button } from '@mui/material';

export default function UserMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 2,
        },
      }}
    >
      <p>Welcome, {}</p>
      <Button aria-label="logout" color="inherit">
        LogOut
      </Button>
    </Box>
  );
}

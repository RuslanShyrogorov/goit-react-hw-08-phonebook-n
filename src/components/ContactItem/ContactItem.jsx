import { Card, CardContent, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ContactItem() {
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
    <Grid>
      <Item
        sx={{
          '&:hover': {
            boxShadow: 4,
            cursor: 'pointer',
          },
        }}
      >
        <Card variant="outlined" sx={{ minWidth: '320px' }}>
          <CardContent sx={{ position: 'relative' }}>
            <MyTooltip title="Delete">
              <IconButton
                aria-label="delete"
                sx={{
                  // color: 'grey',
                  position: 'absolute',
                  right: '0px',
                  top: '0px',
                }}
              >
                {/* <DeleteForeverIcon sx={{ color: 'red', ml: 'auto' }} /> */}
                <DeleteOutlineIcon
                  color="error"
                  sx={{ width: '1rem', height: '1rem' }}
                />
              </IconButton>
            </MyTooltip>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.2rem' }}>
              Name :
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontSize: '1.2rem' }}
            >
              Number:
            </Typography>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
}

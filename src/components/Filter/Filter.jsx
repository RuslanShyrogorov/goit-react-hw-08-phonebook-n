// import { useState } from 'react';

import { styled, alpha, Button } from '@mui/material';

import InputBase from '@mui/material/InputBase';
// import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function ContactsFilter() {
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  // const handleChange = e => {
  //   dispatch(setFilter(e.target.value));
  // };

  return (
    <>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Button
        type="text"
        variant="outlined"
        sx={[
          { color: 'white', border: '1px solid white' },
          { size: { xs: 'small', lg: 'medium' } },
        ]}
        // endIcon={<SearchIcon />}
      >
        Search
      </Button>
    </>
    // ======================
  );
}

// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextField } from '@mui/material';
import { selectFilter } from 'redux/filter/fillterSelectors';
import { setFilter } from 'redux/filter/filterSlice';

export default function ContactsFilter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      id="outlined-basic"
      label="Search…"
      variant="outlined"
      sx={{ mt: '100px', mr: '10px' }}
      size="small"
      value={filter}
      onChange={handleChange}
      // endIcon={<SearchIcon />}
    />

    // ======================
  );
}

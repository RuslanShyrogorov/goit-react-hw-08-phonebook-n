import { Box, Button, TextField } from '@mui/material';

import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import { createContact } from 'redux/contacts/contactsOperations';

export function FormAddContact() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handlerAddContact = event => {
    event.preventDefault();
    const form = event.currentTarget;

    // const { name, number } = form
    const newContact = {
      name: form.name.value,
      number: form.number.value,
    };

    contacts.find(contact =>
      contact.name === newContact.name || contact.number === newContact.number
        ? alert(
            `${newContact.name} - ${newContact.number} is already in contacts.`
          )
        : dispatch(createContact(newContact))
    );
    form.reset();
  };

  return (
    <Box component="form" display={'flex'} onSubmit={handlerAddContact}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        // sx={{ mt: '100px', mr: '10px' }}
        size="small"
        name="name"
      />
      <TextField
        id="outlined-basic"
        label="Number"
        variant="outlined"
        // sx={{ mt: '100px', mr: '10px' }}
        size="small"
        name="number"
      />
      <Button
        variant="contained"
        sx={{ maxWidth: '10rem', maxHeight: '2.5rem', ml: 'auto', mr: 'auto' }}
        type="submit"
        disabled={isLoading}
      >
        Add contact
      </Button>
    </Box>
  );
}

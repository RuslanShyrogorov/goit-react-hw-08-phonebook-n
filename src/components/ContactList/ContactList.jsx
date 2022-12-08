import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import ContactItem from 'components/ContactItem/ContactItem';
import ContactsFilter from 'components/Filter/Filter';

// import { getContacts } from 'redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/fillterSelectors';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contactsSelectors';
import Loader from 'components/Loader/Loader';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';

export default function ContactsList() {
  const items = useSelector(selectContacts);
  console.log('items: ', items);

  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <Loader />;
  }

  const filteredContacts = () => {
    if (!filter) {
      return items;
    }
    const normalizeFilter = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = filteredContacts();

  const contactItems = visibleContacts.map(contact => (
    <ContactItem {...contact} />
  ));

  return (
    <Container>
      <ContactsFilter />
      <FormAddContact />
      <Grid container spacing={2} sx={{ mt: '10px' }}>
        {contactItems}
      </Grid>
    </Container>
  );
}

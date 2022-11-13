import Grid from '@mui/material/Unstable_Grid2';
import { Container } from '@mui/material';
import ContactItem from 'components/ContactItem/ContactItem';

export default function ContactsList() {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: '70px' }}>
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </Grid>
    </Container>
  );
}

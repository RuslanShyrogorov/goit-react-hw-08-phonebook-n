import { styled } from '@mui/material/styles';
import { Button, Box, TextField, Typography } from '@mui/material';

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: 'green',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});

export function LoginForm() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        maxWidth: 'sm',
        display: 'grid',
        gridTemplateColumns: { sm: '1fr' },
        gap: 2,
        m: 'auto',
        pt: 12,
      }}
    >
      <Typography
        variant="h3"
        component="h4"
        m={'auto'}
        color={'text.secondary'}
      >
        LOGIN
      </Typography>
      <ValidationTextField
        label="Email"
        required
        variant="outlined"
        placeholder="Email"
        // defaultValue="Email"
        id="validation-outlined-input"
      />
      <ValidationTextField
        label="Password"
        required
        variant="outlined"
        placeholder="Password"
        // defaultValue="Email"
        id="validation-outlined-input"
      />
      <Button
        variant="contained"
        sx={{ maxWidth: '8rem', ml: 'auto', mr: 'auto' }}
      >
        LogIn
      </Button>
    </Box>
  );
}

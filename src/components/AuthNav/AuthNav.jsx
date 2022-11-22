import { Link, Button } from '@mui/material';

export default function AuthNav() {
  return (
    <>
      <Button aria-label="signup" color="inherit">
        <Link href="/register" color="inherit">
          SignUp
        </Link>
      </Button>
      <Button aria-label="login" color="inherit">
        <Link href="/login" color="inherit">
          LogIn
        </Link>
      </Button>
    </>
  );
}

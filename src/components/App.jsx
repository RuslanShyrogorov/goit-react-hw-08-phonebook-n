import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Contacts } from 'pages/Contacts';

const RegisterPage = lazy(() => import('pages/Register'));
const HomePage = lazy(() => import('pages/Home'));
const LoginPage = lazy(() => import('pages/Login'));
// const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/contacts" element={<ContactsPage />} /> */}
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import Header from 'components/Header/Header';
// import { HeaderNew } from 'components/HeaderNew/HeaderNew';

export default function Layout() {
  return (
    <>
      <Header />

      {/* <HeaderNew /> */}
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

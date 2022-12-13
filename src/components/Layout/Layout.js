import React from 'react';
import { Outlet } from 'react-router-dom';
import Foo from '../shared/Footer/Foo';
import Navbar from '../shared/Navbar/Navbar';

const Layout = () => {
    return (
        <>
      <Navbar></Navbar>

      <Outlet />
      <Foo></Foo>
    </>
    );
};

export default Layout;
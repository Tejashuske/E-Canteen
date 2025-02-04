// Layout.jsx
import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

function Layout() {
  return (
    <div className="home-container row">
      <Header />
      <div className="main-content">
        <Outlet /> {/* The nested route components will be rendered here */}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
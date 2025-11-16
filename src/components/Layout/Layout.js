import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout() {
  const [sidebarAberta, setSidebarAberta] = useState(true);

  return (
    <div className="layout">
      <Sidebar aberta={sidebarAberta} setAberta={setSidebarAberta} />
      
      <main className={`conteudo ${sidebarAberta ? 'sidebar-aberta' : 'sidebar-fechada'}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

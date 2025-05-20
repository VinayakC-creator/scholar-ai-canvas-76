
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar collapsed={sidebarCollapsed} />
      <Header toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
      
      <main className={`pt-16 transition-all duration-300 ease-in-out ${
        sidebarCollapsed ? 'ml-[70px]' : 'ml-[250px]'
      }`}>
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;

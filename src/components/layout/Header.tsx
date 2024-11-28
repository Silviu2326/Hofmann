import React from 'react';
import { TopBar } from './TopBar';
import { MainNav } from './MainNav';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <TopBar />
      <MainNav />
    </header>
  );
};
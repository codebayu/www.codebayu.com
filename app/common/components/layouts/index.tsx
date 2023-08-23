'use client';

import React, { ReactNode, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Sidebar from './sidebar';

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <div className="flex px-32 pt-10 h-screen overflow-hidden">
      <Sidebar />
      <main className="w-full h-screen overflow-y-auto no-scrollbar">
        {children}
      </main>
    </div>
  );
}

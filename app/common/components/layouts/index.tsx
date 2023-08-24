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
    <div className="flex flex-col justify-center lg:flex-row lg:gap-5 lg:pt-10 lg:h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
        <header className="lg:w-1/5 lg:px-4">
          <Sidebar />
        </header>
        <main className="lg:max-w-[854px] transition-all duration-300 w-full lg:h-screen overflow-y-auto no-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
}
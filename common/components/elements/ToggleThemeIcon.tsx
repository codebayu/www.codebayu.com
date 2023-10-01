'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { BsCloudMoon, BsCloudSun } from 'react-icons/bs';

import useHasMounted from '@/hooks/useHasMounted';

export default function ToggleThemeIcon() {
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useHasMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;
  return (
    <button onClick={toggleTheme} className="bg-white dark:bg-neutral-800 p-2 rounded-xl">
      {resolvedTheme === 'light' ? <BsCloudSun /> : <BsCloudMoon />}
    </button>
  );
}

import Link from 'next/link';

import React from 'react';
import { FcMindMap } from 'react-icons/fc';

export default function GoHome() {
  return (
    <div className="flex w-full justify-center mt-8">
      <Link href="/" className="flex space-x-2 border border-neutral-200 items-center px-4 py-2 rounded-xl">
        <FcMindMap />
        <span>Portfolio</span>
      </Link>
    </div>
  );
}

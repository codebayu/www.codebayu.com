import Link from 'next/link';

import React from 'react';
import { FcMindMap } from 'react-icons/fc';
import { TbCoffee } from 'react-icons/tb';

import { SAWERIA_URL } from '@/common/constant';

export default function GoHome() {
  return (
    <div
      className="flex flex-col space-y-3 md:space-y-0 md:space-x-3 px-6 md:flex-row w-full justify-center mt-8"
      data-aos="zoom-in-down"
    >
      <Link
        href="/"
        className="flex border w-full h-max md:w-max shadow-sm border-neutral-200 dark:border-neutral-700 justify-center items-center px-6 py-3 rounded-xl gap-2 hover:gap-3 delay-75 hover:transition-all hover:duration-300 transition-all duration-300"
      >
        <FcMindMap />
        <span>Awesome Magic</span>
      </Link>
      <Link
        href={SAWERIA_URL}
        target="_blank"
        className="flex w-full h-max md:w-max bg-teal-500 text-white shadow-sm justify-center items-center px-6 py-3 rounded-xl gap-2 hover:gap-3 delay-75 hover:transition-all hover:duration-300 transition-all duration-300"
      >
        <TbCoffee />
        <span>Buy me a Coffee</span>
      </Link>
    </div>
  );
}

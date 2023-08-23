import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tooltip from '@/app/common/components/elements/Tooltip';
import Status from '@/app/common/components/elements/Status';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

export default function Profile() {
  return (
    <div>
      <Image
        src="/profile.jpeg"
        alt="profile"
        width={100}
        height={100}
        className="rounded-full"
        priority
      />
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-lg lg:text-xl font-sora font-medium">
            Bayu Setiawan
          </h2>
        </Link>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <div className="hidden lg:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300">
        @codebayu
      </div>
      <div className="flex items-center mt-4 w-full justify-between">
        <Status />
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
}

import Link from 'next/link';

import clsx from 'clsx';
import React from 'react';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

import { DEVTO_PROFILE } from '@/common/constant';

import Image from '../../elements/Image';
import Tooltip from '../../elements/Tooltip';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function ProfileHeader({ expandMenu, imageSize }: ProfileHeaderProps) {
  const PROFILE_URL =
    'https://res.cloudinary.com/dvlbwm8c1/image/upload/v1693008885/codebayu/ab0kfkhjgymzthooxiea.webp';
  return (
    <div
      className={clsx(
        'flex items-center lg:items-start gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <Image
        src={PROFILE_URL}
        alt="profile"
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded="rounded-full"
        className="lg:hover:scale-105"
      />
      <div className="flex gap-2 items-center mt-1 lg:mt-4">
        <Link href="/" passHref>
          <h2 className="flex-grow text-lg lg:text-xl font-sora font-medium">Bayu Setiawan</h2>
        </Link>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <Link
        href={DEVTO_PROFILE}
        target="_blank"
        className="hidden lg:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300"
      >
        @codebayu
      </Link>
    </div>
  );
}

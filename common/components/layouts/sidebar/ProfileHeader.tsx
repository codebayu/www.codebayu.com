import Link from 'next/link';

import clsx from 'clsx';
import React from 'react';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

import { BACKDROP_IMAGE, DEVTO_PROFILE, PROFILE_URL } from '@/common/constant';

import Image from '../../elements/Image';
import Status from '../../elements/Status';
import Tooltip from '../../elements/Tooltip';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
}

export default function ProfileHeader({ expandMenu, imageSize }: ProfileHeaderProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-4 lg:gap-0.5 flex-grow lg:flex-col w-full',
        expandMenu && 'flex-col !items-start'
      )}
    >
      <div className="relative overflow-hidden hidden w-full pb-2 lg:flex flex-col items-center">
        <div className="absolute inverted-border-radius z-10 left-0 py-2 pr-2 rounded-xl bg-white">
          <Status />
        </div>
        <div className="w-full">
          <Image
            src={BACKDROP_IMAGE}
            alt="profile"
            width={100}
            height={100}
            rounded="rounded-lg"
            className="w-full h-24"
          />
        </div>
        <div className="-mt-11 shadow-md border-2 z-10 border-white rounded-full">
          <Image
            src={PROFILE_URL}
            alt="profile"
            width={expandMenu ? 80 : imageSize * 0.9}
            height={expandMenu ? 80 : imageSize * 0.9}
            rounded="rounded-full"
            className="lg:hover:scale-105"
          />
        </div>
      </div>
      <Image
        src={PROFILE_URL}
        alt="profile"
        width={expandMenu ? 80 : imageSize * 0.9}
        height={expandMenu ? 80 : imageSize * 0.9}
        rounded="rounded-full"
        className="lg:hover:scale-105 lg:hidden"
      />
      <div className="flex gap-2 items-center mt-1">
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

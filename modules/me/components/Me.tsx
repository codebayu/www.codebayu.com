import React from 'react';

import SocialMedia from '@/common/components/elements/SocialMedia';
import { SOCIAL_MEDIA } from '@/common/constant/menu';

import GoHome from './GoHome';
import MeProfile from './MeProfile';

export default function MeSection() {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow);
  return (
    <>
      <MeProfile />
      <SocialMedia items={filteredSocialMedia} isMePage />
      <GoHome />
    </>
  );
}

import Embed from '@/common/components/elements/Embed';
import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { TIKTOK_USERNAME } from '@/common/constant/tiktok';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { SiTiktok } from 'react-icons/si';

export default async function Tiktok() {
  return (
    <>
      <SectionHeading title="Tiktok" icon={<SiTiktok className="mr-1" />} />
      <SectionSubHeading>
        <p className="text-neutral-600 dark:text-neutral-400">
          Find me on tiktok
        </p>
        <Link
          href={`https://www.tiktok.com/${TIKTOK_USERNAME}`}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          {TIKTOK_USERNAME}
        </Link>
      </SectionSubHeading>
      <Embed />
    </>
  );
}

async function getTiktokToken() {
  const KEY = process.env.TIKTOK_KEY;
  const SECRET = process.env.TIKTOK_SECRET;
  const DOMAIN = process.env.DOMAIN;
  const response = await axios.post(
    'https://open.tiktokapis.com/v2/oauth/token/',
    {
      client_key: KEY,
      client_secret: SECRET,
      grant_type: 'authorization_code',
      code: 'user.info.basic',
      redirect_uri: DOMAIN,
    },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  return response.data;
}

async function getTiktokProfile() {
  const access_token = await getTiktokToken();
  const response = await axios.get(
    'https://www.tiktok.com/oembed?url=https://www.tiktok.com/@codebayu.com',
    { headers: { Authorization: `Bearer` } }
  );
  return response.data;
}

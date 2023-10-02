import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import { PLACEHOLDER_URL } from '@/common/constant';
import { LEARN_CONTENTS } from '@/common/constant/learn';
import { formatDate } from '@/common/helpers';
import { BlogItem } from '@/common/types/blog';

interface LatestArticleCardProps {
  data: BlogItem;
}

export default function LatestArticleCard({ data }: LatestArticleCardProps) {
  const title = data?.title.slice(0, 30) + (data.title.length > 20 ? '...' : '');

  function generateDetailUrl() {
    if (!data.collection_id) return `/blog/${data.slug}?id=${data.id}&read-mode=true`;
    const collection = LEARN_CONTENTS.find(collection => collection.id === data.collection_id);
    return `/learn/${collection?.slug}/${data.slug}?id=${data.id}&read-mode=true`;
  }

  return (
    <Link
      href={generateDetailUrl()}
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500"
    >
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
          src={data.cover_image || PLACEHOLDER_URL}
          alt={data.title}
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className=" text-sm text-neutral-800 dark:text-neutral-300">{title}</p>
      <span className=" text-[10px] text-neutral-600 dark:text-neutral-400">
        {formatDate(data.published_at, 'MMM dd, yyyy')}
      </span>
    </Link>
  );
}

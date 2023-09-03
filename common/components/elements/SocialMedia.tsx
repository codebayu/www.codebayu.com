import Link from 'next/link';

import clsxm from '@/common/libs/clsxm';
import { MenuItemProps } from '@/common/types/menu';

import Tooltip from './Tooltip';

type SocialMediaProps = {
  items: MenuItemProps[];
  isMePage?: boolean;
};

export default function SocialMedia({ items, isMePage }: SocialMediaProps) {
  const dataAos = isMePage ? 'zoom-in-down' : '';
  return (
    <div data-aos={dataAos} className={clsxm('flex flex-col space-y-1', isMePage && 'items-center mt-6')}>
      <div className="text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500 font-sora">Let`s Connect</div>
      <div className={clsxm('flex justify-around lg:justify-between px-5 pt-2', isMePage && 'space-x-8')}>
        {items?.map((item: MenuItemProps, index: number) => (
          <Link
            key={index}
            href={item?.href}
            target="_blank"
            data-umami-event={item?.eventName}
            aria-label={item?.title}
          >
            <Tooltip title={item?.title}>
              <div className="text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 lg:hover:scale-110 transition duration-300">
                {item?.icon}
              </div>
            </Tooltip>
          </Link>
        ))}
      </div>
    </div>
  );
}

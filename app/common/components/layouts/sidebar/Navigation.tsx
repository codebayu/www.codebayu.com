import { MenuItemProps } from '@/app/common/types/menu';
import MenuItem from './MenuItem';
import SocialMedia from '../../elements/SocialMedia';
import { SOCIAL_MEDIA } from '@/app/common/constant/menu';
import Breakline from '../../elements/Breakline';

type MenuProps = {
  title?: string;
  list: MenuItemProps[];
};
const filteredSocialMedia = SOCIAL_MEDIA?.filter((item) => item?.isShow);

export default function Navigation({ title, list }: MenuProps) {
  return (
    <div className="flex flex-col space-y-1 md:pt-32 lg:pt-0">
      {title && (
        <div className="hidden lg:block text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500 font-sora">
          {title}
        </div>
      )}
      {list?.map((item: MenuItemProps, index: number) => (
        <MenuItem key={index} {...item} />
      ))}
      <Breakline />
      <SocialMedia items={filteredSocialMedia} />
    </div>
  );
}

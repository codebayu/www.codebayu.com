import { MENU_ITEMS, SOCIAL_MEDIA } from '@/app/common/constant/menu';
import Breakline from '@/app/common/components/elements/Breakline';
import SocialMedia from '@/app/common/components/elements/SocialMedia';
import Copyright from '@/app/common/components/elements/Copyright';
import Navigation from './Navigation';
import Profile from './Profile';

export default function Sidebar() {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((item) => item?.isShow);

  return (
    <header className="min-w-max px-10 flex flex-col flex-nowrap">
      <Profile />
      <Breakline />
      <Navigation list={filterdMenu} />
      <Breakline />
      <SocialMedia items={filteredSocialMedia} />
      <Breakline />
      <Copyright />
    </header>
  );
}

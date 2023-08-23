import { MENU_ITEMS, SOCIAL_MEDIA } from '@/app/common/constant/menu';
import Breakline from '@/app/common/components/elements/Breakline';
import Copyright from '@/app/common/components/elements/Copyright';
import Navigation from './Navigation';
import Profile from './Profile';
import useIsMobile from '@/hooks/useIsMobile';

export default function Sidebar() {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const isMobile = useIsMobile();
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <Profile />
      {!isMobile && (
        <>
          <Breakline />
          <Navigation list={filterdMenu} />
          <Breakline />
          <Copyright />
        </>
      )}
    </div>
  );
}

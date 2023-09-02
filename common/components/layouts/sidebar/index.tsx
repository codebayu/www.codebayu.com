import Breakline from '@/common/components/elements/Breakline';
import Copyright from '@/common/components/elements/Copyright';
import Navigation from './Navigation';
import Profile from './Profile';
import useIsMobile from '@/hooks/useIsMobile';

export default function Sidebar() {
  const isMobile = useIsMobile();
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <Profile />
      {!isMobile && (
        <>
          <Breakline />
          <Navigation />
          <Breakline />
          <Copyright />
        </>
      )}
    </div>
  );
}

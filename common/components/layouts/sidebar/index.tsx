import Breakline from '@/common/components/elements/Breakline';
import Copyright from '@/common/components/elements/Copyright';

import Navigation from './Navigation';
import Profile from './Profile';

export default function Sidebar() {
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <Profile />
      <nav className="hidden md:block">
        <Breakline />
        <Navigation />
        <Breakline />
        <Copyright />
      </nav>
    </div>
  );
}

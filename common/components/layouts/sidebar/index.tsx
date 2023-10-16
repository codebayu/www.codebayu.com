import Breakline from '@/common/components/elements/Breakline'
import Copyright from '@/common/components/elements/Copyright'
import { MENU_ITEMS } from '@/common/constant/menu'

import Menu from './Menu'
import Profile from './Profile'

export default function Sidebar() {
  const filterdMenu = MENU_ITEMS?.filter(item => item?.isShow)
  return (
    <div className="sticky transition-all duration-300 top-0 z-10 flex flex-col lg:py-8">
      <Profile />
      <nav className="hidden md:block">
        <Breakline />
        <div className="hidden lg:block">
          <Menu list={filterdMenu} />
        </div>
        <Breakline />
        <Copyright />
      </nav>
    </div>
  )
}

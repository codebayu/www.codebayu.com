import { MENU_ITEMS } from '@/common/constant/menu'

import Menu from './Menu'

export default function Navigation() {
  const filterdMenu = MENU_ITEMS?.filter(item => item?.isShow)
  return <Menu list={filterdMenu} />
}

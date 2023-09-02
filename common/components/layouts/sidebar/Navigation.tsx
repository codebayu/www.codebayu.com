import { MENU_ITEMS, SOCIAL_MEDIA } from '@/common/constant/menu';

import Breakline from '../../elements/Breakline';
import SocialMedia from '../../elements/SocialMedia';
import Menu from './Menu';

export default function Navigation() {
  const filterdMenu = MENU_ITEMS?.filter(item => item?.isShow);
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow);
  return (
    <>
      <Menu list={filterdMenu} />
      <Breakline />
      <SocialMedia items={filteredSocialMedia} />
    </>
  );
}

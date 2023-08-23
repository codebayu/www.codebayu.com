import { motion } from 'framer-motion';
import { FC } from 'react';

import Navigation from './Navigation';
import Breakline from '../../elements/Breakline';
import { MENU_ITEMS } from '@/app/common/constant/menu';

const MobileMenu: FC = () => {
  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  return (
    <motion.div
      className="h-screen flex flex-col my-3"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline className="mt-2" />
        <Navigation list={filterdMenu} />
      </div>
    </motion.div>
  );
};

export default MobileMenu;

import { motion } from 'framer-motion';
import { FC } from 'react';

import Breakline from '../../elements/Breakline';
import Navigation from './Navigation';

const MobileMenu: FC = () => {
  return (
    <motion.div
      className="h-screen flex flex-col my-3"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <Breakline className="mt-2" />
        <Navigation />
      </div>
    </motion.div>
  );
};

export default MobileMenu;

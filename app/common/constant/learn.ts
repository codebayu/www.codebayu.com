import { ContentProps } from '../types/learn';

export const LEARN_CONTENTS: ContentProps[] = [
  {
    id: 1,
    title: 'Problem Solving',
    slug: 'problem-solving',
    description:
      'Learn problem solving in JavaScript with detailed explanations',
    image: 'https://picsum.photos/800/400',
    is_new: true,
    level: 'all-levels',
    is_show: true,
  },
  {
    id: 2,
    title: 'JavasScript for Beginners',
    slug: 'js-beginners',
    description: 'Unleash the Power of JavaScript Skill for Beginners',
    image: 'https://picsum.photos/800/400',
    is_new: false,
    level: 'beginner',
    is_show: false,
  },
];

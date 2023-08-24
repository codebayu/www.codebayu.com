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
    is_show: false,
  },
  {
    id: 2,
    title: 'JavasScript Tips',
    slug: 'js-tips',
    description: 'Unleash the Power of JavaScript Skill for Developers',
    image: '/learn/javascript-tips.webp',
    is_new: true,
    level: 'beginner',
    is_show: true,
  },
];

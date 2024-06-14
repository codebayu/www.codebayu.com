import {
  BiEditAlt as BlogIcon,
  BiPaperPlane as ContactIcon,
  BiCategoryAlt as DashboardIcon,
  BiHomeSmile as HomeIcon,
  BiBookBookmark as LearnIcon,
  BiLeaf as ProfileIcon,
  BiArchive as ProjectIcon
} from 'react-icons/bi'
import { BsDiscord as DiscordIcon, BsGithub as GithubIcon, BsLinkedin as LinkedinIcon } from 'react-icons/bs'
import { LuTrello, LuWorkflow } from 'react-icons/lu'
import { PiChatTeardropDotsBold as ChatIcon } from 'react-icons/pi'
import { RiNpmjsFill as NpmIcon } from 'react-icons/ri'

import { MenuItemProps, SocialMedia } from '../types/menu'

const iconSize = 20

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home'
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About'
  },
  {
    title: 'Blog',
    href: '/blog?category=home',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog'
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects'
  },

  {
    title: 'Learn',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Learn'
  },
  {
    title: 'Roadmap',
    href: '/roadmap?tribe=frontend-developer',
    icon: <LuWorkflow size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Roadmap'
  },
  {
    title: 'Task Board',
    href: '/board',
    icon: <LuTrello size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Task Board'
  },
  {
    title: 'Chat Room',
    href: '/chat',
    icon: <ChatIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Chat Room'
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact'
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard'
  }
]

export const SOCIAL_MEDIA: SocialMedia[] = [
  {
    id: 'GitHub',
    title: 'Explore the code',
    description: 'Explore the source code for all my projects on GitHub.',
    href: 'https://github.com/codebayu',
    icon: <GithubIcon className="text-xl md:text-3xl" />,
    classContainer:
      'border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950',
    classText: 'text-slate-800 dark:text-slate-400',
    classLink: 'bg-slate-800 hover:bg-slate-700 dark:bg-slate-400 dark:hover:bg-slate-300',
    classIcon: 'bg-slate-800 dark:bg-slate-500'
  },
  {
    id: 'Linkedin',
    title: 'Let`s connect',
    description: 'Connect for collaboration or explore my professional experience.',
    href: 'https://www.linkedin.com/in/bayu-setiawan99/',
    icon: <LinkedinIcon className="text-xl md:text-3xl" />,
    classContainer:
      'border-blue-300 from-blue-100 to-blue-200 dark:border-blue-600 dark:from-blue-900 dark:to-blue-950',
    classText: 'text-blue-600 dark:text-blue-400',
    classLink: 'bg-blue-600 hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300',
    classIcon: 'bg-blue-600 dark:bg-blue-500'
  },
  {
    id: 'NPM',
    title: 'Open source',
    description: 'Install and contribute to my open-source projects.',
    href: 'https://www.npmjs.com/~bayu-setiawan',
    icon: <NpmIcon className="text-xl md:text-3xl" />,
    classContainer:
      'border-rose-300 from-rose-100 to-rose-200 dark:border-rose-600 dark:from-rose-900 dark:to-rose-950',
    classText: 'text-rose-700 dark:text-rose-400',
    classLink: 'bg-rose-700 hover:bg-rose-600 dark:bg-rose-400 dark:hover:bg-rose-300',
    classIcon: 'bg-rose-700 dark:bg-rose-500'
  },
  {
    id: 'Discord',
    title: 'Chat with the community',
    description: 'Join over 1,000+ others developers on The Code Bayu Discord.',
    href: 'https://discord.gg/76UFeGdXy6',
    icon: <DiscordIcon className="text-xl md:text-3xl" />,
    classContainer:
      'border-purple-300 from-purple-100 to-purple-200 dark:border-purple-600 dark:from-purple-900 dark:to-purple-950',
    classText: 'text-purple-600 dark:text-purple-400',
    classLink: 'bg-purple-600 hover:bg-purple-500 dark:bg-purple-400 dark:hover:bg-purple-300',
    classIcon: 'bg-purple-600 dark:bg-purple-500'
  }
]

export const BLOG_LINK = [
  {
    id: null,
    href: '?category=home',
    label: 'Home',
    value: 'home'
  },
  {
    id: 24593,
    href: '?category=nextjs',
    label: 'Next.js',
    value: 'nextjs'
  },
  {
    id: 24596,
    href: '?category=typescript',
    label: 'TypeScript',
    value: 'typescript'
  },
  {
    id: null,
    href: '/roadmap?tribe=frontend-developer',
    label: 'Roadmap',
    value: 'roadmap'
  }
]

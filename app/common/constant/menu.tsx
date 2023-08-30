import {
  BiArchive as ProjectIcon,
  BiAt as ThreadsIcon,
  BiBookBookmark as LearnIcon,
  BiCategoryAlt as DashboardIcon,
  BiEditAlt as BlogIcon,
  BiEnvelope as ContactIcon,
  BiHomeSmile as HomeIcon,
  BiLeaf as ProfileIcon,
  BiLineChart as AnalyticsIcon,
} from 'react-icons/bi';
import {
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
  BsTwitter as TwitterIcon,
  BsDiscord as DiscordIcon,
  BsYoutube as YoutubeIcon,
  BsTiktok as TiktokIcon,
} from 'react-icons/bs';
import { LuWorkflow } from 'react-icons/lu';

import { MenuItemProps } from '../types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog',
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn',
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: false,
    isExternal: false,
    eventName: 'Pages: Contact',
  },
  {
    title: 'Roadmap',
    href: '/roadmap?tribe=frontend-developer',
    icon: <LuWorkflow size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Roadmap',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Github',
    href: 'https://github.com/Bayusetiawan45',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/bayu-setiawan99/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/',
    icon: <TwitterIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Twitter',
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com/bayustr__',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
  },
  {
    title: 'Threads',
    href: '',
    icon: <ThreadsIcon size={iconSize} />,
    isShow: false,
    isExternal: true,
    eventName: 'Social: Threads',
  },
  {
    title: 'Discord',
    href: 'https://discord.gg/76UFeGdXy6',
    icon: <DiscordIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Discord',
  },
  {
    title: 'Youtube',
    href: 'https://www.youtube.com/@codebayu',
    icon: <YoutubeIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Youtube',
  },
  {
    title: 'TikTok',
    href: 'https://www.tiktok.com/@codebayu.com',
    icon: <TiktokIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Tiktok',
  },
];

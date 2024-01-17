'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaRegEye as ViewIcon } from 'react-icons/fa'
import { HiOutlineClock as ClockIcon } from 'react-icons/hi'
import { TbMessage2 as CommentIcon } from 'react-icons/tb'
import { scroller } from 'react-scroll'

import { formatDate } from '@/common/helpers'

interface ReaderHeaderProps {
  title: string
  comments_count?: number
  reading_time_minutes?: number
  page_views_count?: number | null
  published_at?: string
}

export default function ReaderHeader({
  title,
  comments_count = 0,
  page_views_count,
  published_at,
  reading_time_minutes
}: ReaderHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = () => {
    scroller.scrollTo('comments', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 250)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const transition = { duration: 0.3, ease: 'easeInOut' }
  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <>
      {!isScrolled ? (
        <motion.h1
          className="text-2xl font-semibold"
          initial="initial"
          animate="animate"
          variants={titleVariants}
          transition={transition}
        >
          {title}
        </motion.h1>
      ) : (
        <motion.div
          className="shadow-bottom top-0 z-10 border-b border-neutral-300 bg-light py-6 backdrop-blur dark:border-neutral-600 dark:bg-dark lg:sticky"
          initial="initial"
          animate="animate"
          variants={titleVariants}
          transition={transition}
        >
          <h1 className="text-lg font-semibold lg:text-xl">{title}</h1>
        </motion.div>
      )}
      <div className="mb-6 flex flex-col justify-between gap-2 border-b border-dashed border-neutral-600 pb-6 pt-5 text-[14px] text-neutral-600 dark:text-neutral-400 sm:flex-row">
        <div>
          Published on
          <span className="px-1 font-medium">{published_at ? formatDate(published_at) : ''}</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1 font-medium">
            <ViewIcon size={18} />
            <div className="ml-0.5 flex gap-1">
              <span>{page_views_count || '-'}</span>
              <span>Views</span>
            </div>
          </div>
          <div className="flex items-center gap-1 font-medium">
            <ClockIcon size={18} />
            <div className="ml-0.5 flex gap-1">
              <span>{reading_time_minutes}</span>
              <span>min read</span>
            </div>
          </div>
          <div
            className="hidden cursor-pointer  items-center gap-1 font-medium hover:dark:text-neutral-300 md:flex"
            onClick={scrollToSection}
          >
            <CommentIcon size={20} />
            <div className="ml-0.5 flex gap-1">
              <span>{comments_count}</span>
              <span>Comment{comments_count > 1 && 's'}</span>
            </div>
          </div>
        </div>

        <div
          className="flex cursor-pointer items-center gap-1 font-medium hover:dark:text-neutral-300 md:hidden"
          onClick={scrollToSection}
        >
          <CommentIcon size={20} />
          <div className="ml-0.5 flex gap-1">
            <span>{comments_count}</span>
            <span>Comment{comments_count > 1 && 's'}</span>
          </div>
        </div>
      </div>
    </>
  )
}

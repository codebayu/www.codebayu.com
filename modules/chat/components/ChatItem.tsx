import Image from 'next/image'

import { formatDistanceToNow } from 'date-fns'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FiTrash2 as DeleteIcon } from 'react-icons/fi'
import { ImReply } from 'react-icons/im'
import { MdVerified as VerifiedIcon } from 'react-icons/md'

import Tooltip from '@/common/components/elements/Tooltip'
import { IMessage } from '@/common/types/messages'

interface IChatItemProps extends IMessage {
  deleteMessage: (id: string) => void
  sessionEmail: string
  clickReply: (name: string) => void
}

export default function ChatItem({
  id,
  name,
  message,
  image,
  email,
  created_at,
  sessionEmail,
  is_reply,
  reply_to,
  deleteMessage,
  clickReply
}: IChatItemProps) {
  const [onHover, setOnHover] = useState(false)
  const authorEmail = process.env.NEXT_PUBLIC_AUTHOR_EMAIL as string
  const time = formatDistanceToNow(new Date(created_at), { addSuffix: true })

  return (
    <motion.div
      id="chat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-start space-x-3 w-full"
    >
      <Image src={image} alt={name} width={40} height={40} className="rounded-full" />
      <div className="flex flex-col space-y-1 w-full">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1 items-center">
            <span className="text-sm">{name}</span>
            {authorEmail === email && (
              <Tooltip title="Author">
                <VerifiedIcon size={15} className="text-blue-400" />
              </Tooltip>
            )}
          </div>
          <span className="text-neutral-400 text-xs">{time}</span>
        </div>
        <div
          className="flex space-x-2 items-end w-full max-w-[90%]"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <div className="font-sans bg-neutral-100 dark:bg-neutral-800 py-2 px-3 rounded-xl rounded-tl-none">
            <p className="text-neutral-700 dark:text-neutral-200">
              {is_reply && (
                <>
                  <span className="text-teal-600 whitespace-nowrap mr-1">@{reply_to}</span> <span>{message}</span>
                </>
              )}
              {!is_reply && <>{message}</>}
            </p>
          </div>
          {onHover && (
            <Tooltip title="Reply">
              <motion.button
                aria-label="Reply"
                initial={{ opacity: 0, transform: 'rotate(-45deg)' }}
                animate={{ opacity: 1, transform: 'rotate(0deg)' }}
                onClick={() => clickReply(name)}
              >
                <ImReply sixe={18} className="text-neutral-400" />
              </motion.button>
            </Tooltip>
          )}
        </div>
      </div>
      {authorEmail === sessionEmail && (
        <button onClick={() => deleteMessage(id)} aria-label="Delete">
          <DeleteIcon size={15} className="text-red-500" />
        </button>
      )}
    </motion.div>
  )
}

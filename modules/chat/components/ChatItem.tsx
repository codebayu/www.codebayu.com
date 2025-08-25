import Image from 'next/image'

import Tooltip from '@/components/elements/Tooltip'
import { formatDistanceToNow } from 'date-fns'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiTrash2 as DeleteIcon } from 'react-icons/fi'
import { ImReply } from 'react-icons/im'
import { MdVerified as VerifiedIcon } from 'react-icons/md'

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
      className="flex w-full items-start space-x-3"
    >
      <Image src={image} alt={name} width={40} height={40} className="rounded-full" />
      <div className="flex w-full flex-col space-y-1">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <span className="text-sm">{name}</span>
            {authorEmail === email && (
              <Tooltip title="Author">
                <VerifiedIcon size={15} className="text-blue-400" />
              </Tooltip>
            )}
          </div>
          <span className="text-xs text-neutral-400">{time}</span>
        </div>
        <div
          className="flex w-full max-w-[90%] items-end space-x-2"
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <div className="rounded-xl rounded-tl-none bg-neutral-100 px-3 py-2 font-sans dark:bg-neutral-800">
            <p className="text-neutral-700 dark:text-neutral-200">
              {is_reply && (
                <>
                  <span className="mr-1 whitespace-nowrap text-teal-600">@{reply_to}</span> <span>{message}</span>
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
                <ImReply size={18} className="text-neutral-400" />
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

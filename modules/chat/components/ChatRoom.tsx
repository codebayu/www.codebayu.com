'use client'

import { User } from 'next-auth'

import { tourChatRoom } from '@/common/constant/drivers'
import createDrivers from '@/common/libs/drivers'

import useChat from '@/hooks/useChat'
import useHasMounted from '@/hooks/useHasMounted'

import ChatAuth from './ChatAuth'
import ChatItem from './ChatItem'
import ChatItemSkeleton from './ChatItemSkeleton'

interface ChatRoomProps {
  user: User
}

export default function ChatRoom({ user }: ChatRoomProps) {
  const mounted = useHasMounted()
  const { messages, loading, sendMessage, reply, cancleReply, deleteMessage, clickReply, chatListRef } = useChat({
    user
  })
  const { runDriver, isProductTour } = createDrivers({ steps: tourChatRoom, product: 'chat-room', timing: 2000 })

  if (mounted && isProductTour) {
    runDriver()
  }

  return (
    <div>
      <div
        ref={chatListRef}
        className="no-scrollbar mb-4 h-[60vh] space-y-6 overflow-y-auto scroll-smooth border-b border-neutral-200 pb-2 dark:border-neutral-700 md:h-[65vh]"
      >
        {loading ? (
          <ChatItemSkeleton />
        ) : (
          messages?.map(message => (
            <ChatItem
              key={message.id}
              {...message}
              sessionEmail={String(user?.email)}
              deleteMessage={deleteMessage}
              clickReply={clickReply}
            />
          ))
        )}
      </div>
      <ChatAuth user={user} sendMessage={sendMessage} reply={reply} cancleReply={cancleReply} />
    </div>
  )
}

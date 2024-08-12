'use client'

import { getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { User } from 'next-auth'
import { useEffect, useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'

import { firebase } from '@/common/libs/firebase'
import { IMessage, IRawMessages } from '@/common/types/messages'

import { useNotif } from '@/hooks/useNotif'

export default function useChat({ user }: { user: User }) {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [reply, setReply] = useState({ isReply: false, name: '' })
  const [hasScrolledUp, setHasScrolledUp] = useState(false)
  const chatListRef = useRef<HTMLDivElement | null>(null)
  const notif = useNotif()

  const db = getDatabase(firebase)
  const dbMessages = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_CHAT

  function sendMessage(message: string) {
    const messageId = uuid()
    const messageRef = ref(db, `${dbMessages}/${messageId}`)

    set(messageRef, {
      id: messageId,
      name: user?.name,
      email: user?.email,
      image: user?.image,
      message,
      created_at: new Date().toISOString(),
      is_show: true,
      is_reply: reply.isReply,
      reply_to: reply.name
    })
  }

  function deleteMessage(id: string) {
    const messageRef = ref(db, `${dbMessages}/${id}`)

    if (messageRef) {
      remove(messageRef)
    }
  }

  function clickReply(name: string) {
    if (!user) return notif('Please sign in to reply')
    setReply({ isReply: true, name })
  }

  function cancleReply() {
    setReply({ isReply: false, name: '' })
  }

  useEffect(() => {
    const messagesRef = ref(db, dbMessages)
    onValue(messagesRef, snapshot => {
      const data: IRawMessages = snapshot.val()

      const transformMessages: IMessage[] = Object.entries(data)
        .map(([id, value]) => ({
          id,
          ...value
        }))
        .sort((a, b) => {
          const dateA = new Date(a.created_at)
          const dateB = new Date(b.created_at)
          return dateA.getTime() - dateB.getTime()
        })
      setMessages(transformMessages)
      setLoading(false)
    })
  }, [db, dbMessages])

  useEffect(() => {
    if (chatListRef.current && !hasScrolledUp) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight
    }
  }, [messages, hasScrolledUp])

  useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isScrolledToBottom =
          chatListRef.current.scrollHeight - chatListRef.current.clientHeight <= chatListRef.current.scrollTop + 5

        if (isScrolledToBottom) {
          setHasScrolledUp(false)
        } else {
          setHasScrolledUp(true)
        }
      }
    }

    chatListRef.current?.addEventListener('scroll', handleScroll)

    const currentChatListRef = chatListRef.current

    return () => {
      currentChatListRef?.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { messages, loading, reply, sendMessage, deleteMessage, clickReply, cancleReply, chatListRef }
}

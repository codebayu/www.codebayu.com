import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LuSend as SendIcon } from 'react-icons/lu'
import { MdOutlineClose as CloseIcon } from 'react-icons/md'

import InputField from '@/common/components/elements/InputField'
import clsxm from '@/common/libs/clsxm'
import { IReply } from '@/common/types/messages'

interface IChatForm {
  message: string
}

interface IChatInputProps {
  sendMessage: (message: string) => void
  reply: IReply
  cancleReply: () => void
}

export default function ChatInput({ reply, sendMessage, cancleReply }: IChatInputProps) {
  const [disabled, setDisabled] = useState(true)
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<IChatForm>()

  async function handleFormSubmit(payload: IChatForm) {
    sendMessage(payload.message)
    reset()
    cancleReply()
  }

  useEffect(() => {
    const subscription = watch(value => {
      setDisabled(!value.message)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex items-end space-x-2">
      <div className="flex flex-col w-full space-y-2">
        {reply.isReply && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center space-x-2 text-xs text-neutral-500 dark:text-neutral-200 w-max bg-neutral-200 dark:bg-neutral-800 rounded-lg py-1 px-2"
          >
            <p>Replying to {reply.name}</p>
            <button
              onClick={cancleReply}
              aria-label="Close Reply"
              className="rounded-full bg-neutral-50 dark:bg-neutral-600"
            >
              <CloseIcon size={14} />
            </button>
          </motion.div>
        )}
        <InputField
          isTextArea
          rows={1}
          name="message"
          placeholder="Type your message..."
          register={register}
          error={errors}
        />
      </div>
      <button
        disabled={disabled}
        aria-label="Send message"
        className={clsxm('bg-neutral-600 mb-1 text-white p-3 rounded-lg', disabled && 'cursor-not-allowed opacity-50')}
      >
        <SendIcon />
      </button>
    </form>
  )
}

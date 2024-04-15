import InputField from '@/components/elements/InputField'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { LuSend as SendIcon } from 'react-icons/lu'
import { MdOutlineClose as CloseIcon } from 'react-icons/md'

import { cn } from '@/common/libs/cn'
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
      <div className="flex w-full flex-col space-y-2">
        {reply.isReply && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex w-max items-center justify-center space-x-2 rounded-lg bg-neutral-200 px-2 py-1 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-200"
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
        className={cn('mb-1 rounded-lg bg-neutral-600 p-3 text-white', disabled && 'cursor-not-allowed opacity-50')}
      >
        <SendIcon />
      </button>
    </form>
  )
}

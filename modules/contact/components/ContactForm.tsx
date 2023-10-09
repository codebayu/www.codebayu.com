'use client'

import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import InputField from '@/common/components/elements/InputField'

interface IFormEmail {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IFormEmail>()
  const [isLoading, setIsLoading] = useState(false)

  async function handleFormSubmit(payload: IFormEmail) {
    setIsLoading(true)
    try {
      await axios.post('/api/email', payload)
      reset()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col space-y-4">
      <h2>Or send me a message</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col space-y-4 transition-all duration-300">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 w-full">
          <InputField name="name" rule={{ required: true }} register={register} error={errors} />
          <InputField name="email" rule={{ required: true }} register={register} error={errors} />
        </div>
        <InputField name="message" rule={{ required: true }} register={register} error={errors} isTextArea />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-neutral-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-neutral-800 hover:shadow-lg"
        >
          {isLoading ? 'Sending your message...' : 'Send Email'}
        </button>
      </form>
    </div>
  )
}

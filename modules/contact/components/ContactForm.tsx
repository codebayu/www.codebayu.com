'use client'

import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
  const [buttonText, setButtonText] = useState('Send Email')
  const [isSuccess, setIsSuccess] = useState(false)
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  async function handleFormSubmit(payload: IFormEmail) {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/email', payload)
      if (response.status === 200) setIsSuccess(true)
      reset()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setButtonText(isLoading ? 'Sending your message...' : 'Send Email')
    if (!isLoading && isSuccess) setButtonText('Your email sent successfully')
    const timeout = setTimeout(() => {
      setButtonText('Send Email')
    }, 5000)
    return () => clearTimeout(timeout)
  }, [isLoading, isSuccess])

  return (
    <div className="flex flex-col space-y-4">
      <h2>Or send me a message</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col space-y-4 transition-all duration-300">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 w-full">
          <InputField name="name" rule={{ required: true }} register={register} error={errors} />
          <InputField
            name="email"
            rule={{
              required: true,
              pattern: {
                value: regexEmail,
                message: 'please enter a valid email'
              }
            }}
            register={register}
            error={errors}
          />
        </div>
        <InputField name="message" rule={{ required: true }} register={register} error={errors} isTextArea />
        <button
          disabled={isLoading}
          type="submit"
          className="bg-neutral-700 text-white py-2 px-4 rounded-lg shadow-md hover:bg-neutral-800 hover:shadow-lg"
        >
          {buttonText}
        </button>
      </form>
    </div>
  )
}

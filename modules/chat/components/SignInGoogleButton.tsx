'use client'

import { usePathname } from 'next/navigation'

import { signIn } from 'next-auth/react'
import { FcGoogle as GoogleIcon } from 'react-icons/fc'

import { sendDataLayer } from '@/common/libs/gtm'

export default function SignInGoogleButton() {
  const pathname = usePathname()
  function handleGoogleSignIn() {
    sendDataLayer({ event: 'google_signin_clicked', page_path: pathname })
    signIn('google')
  }
  return (
    <button
      id="google-sign-in"
      onClick={handleGoogleSignIn}
      className="flex space-x-2 py-2 px-8 rounded-lg items-center justify-center shadow-sm border dark:border-neutral-700 hover:scale-[101%] transition duration-300 bg-white dark:bg-neutral-700 w-max mt-2 mb-2"
    >
      <GoogleIcon size={18} />
      <span className="text-neutral-700 dark:text-neutral-200">Sign in with Google</span>
    </button>
  )
}

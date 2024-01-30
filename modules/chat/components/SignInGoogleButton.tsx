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
      className="mb-2 mt-2 flex w-max items-center justify-center space-x-2 rounded-lg border bg-white px-8 py-2 shadow-sm transition duration-300 hover:scale-[101%] dark:border-neutral-700 dark:bg-neutral-700"
    >
      <GoogleIcon size={18} />
      <span className="text-neutral-700 dark:text-neutral-200">Sign in with Google</span>
    </button>
  )
}

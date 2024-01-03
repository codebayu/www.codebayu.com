'use client'

import { signIn } from 'next-auth/react'
import { FcGoogle as GoogleIcon } from 'react-icons/fc'

export default function SignInGoogleButton() {
  return (
    <button
      id="google-sign-in"
      onClick={() => signIn('google')}
      className="flex space-x-2 p-2 rounded-lg items-center justify-center shadow-sm border dark:border-neutral-700 hover:scale-[101%] transition duration-300 bg-white dark:bg-neutral-700 w-full mt-2 mb-2"
      data-umami-event="Sign In to Chat: Google"
    >
      <GoogleIcon size={18} />
      <span className="text-black dark:text-neutral-200">Sign in with Google</span>
    </button>
  )
}

'use client'

import { signIn } from 'next-auth/react'
import { FcGoogle as GoogleIcon } from 'react-icons/fc'

export default function SignInGoogleButton() {
  return (
    <button
      onClick={() => signIn('google')}
      className="flex p-2 rounded-lg items-center justify-center shadow-sm border hover:scale-[101%] transition duration-300 !bg-white w-full mt-2 mb-2"
      data-umami-event="Sign In to Chat: Google"
    >
      <GoogleIcon size={18} />
      <span className="text-black">Sign in with Google</span>
    </button>
  )
}

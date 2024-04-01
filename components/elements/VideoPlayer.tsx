'use client'

import dynamic from 'next/dynamic'

import React from 'react'

const ReactPlayer = dynamic(() => import('react-player/youtube'), { ssr: false })

interface VideoPlayerProps {
  url: string
}
export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div data-testid="video-player" className="h-full w-full">
      <ReactPlayer url={url} controls width="100%" height="100%" />
    </div>
  )
}

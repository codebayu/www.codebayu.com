import { Metadata } from 'next'

import React from 'react'

import { METADATA } from '@/common/constant/metadata'

import RequestBoard from '@/modules/board'

export const metadata: Metadata = {
  title: `Task Board ${METADATA.exTitle}`,
  description: 'Task board like trello',
  keywords: 'task board, trello, kanban board, board',
  alternates: {
    canonical: `${process.env.DOMAIN}/board`
  }
}

export default function BoardPage() {
  return <RequestBoard />
}

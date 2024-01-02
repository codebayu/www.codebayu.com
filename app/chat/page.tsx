import { Metadata } from 'next'

import { User, getServerSession } from 'next-auth'

import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import { METADATA } from '@/common/constant/metadata'

import ChatRoom from '@/modules/chat'

export const metadata: Metadata = {
  title: `Chat Room ${METADATA.exTitle}`,
  description: 'The community chat room for codebayu.com',
  keywords: 'chat room, codebayu, community',
  alternates: {
    canonical: `${process.env.DOMAIN}/chat`
  }
}

const PAGE_TITLE = 'Chat Room'
const PAGE_DESCRIPTION = 'Leave your impression or suggestion about this website here'

export default async function ChatRoomPage() {
  const session = await getServerSession()
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <ChatRoom user={session?.user as User} />
      </Container>
    </>
  )
}

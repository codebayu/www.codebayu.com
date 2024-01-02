export interface IMessage {
  id: string
  name: string
  email: string
  message: string
  image: string
  is_show: boolean
  created_at: string
  reply_to: string
  is_reply: boolean
}

export interface IRawMessages {
  id: IMessage
}

export interface IReply {
  isReply: boolean
  name: string
}

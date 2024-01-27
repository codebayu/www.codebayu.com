import axios from 'axios'

import { reportError } from '@/common/helpers/error'

export async function getCodewarsServices() {
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID
  const CODEWARS_API = `https://www.codewars.com/api/v1/users/${USER_ID}`
  try {
    const response = await axios.get(CODEWARS_API)
    return response.data
  } catch (error) {
    reportError(error)
  }
}

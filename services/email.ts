import axios from 'axios'

import { reportError } from '@/common/helpers/error'

export async function sendEmailServices(formData: FormData) {
  try {
    const EMAIL_API = process.env.EMAIL_SERVICE_API || ''
    const response = await axios.post(EMAIL_API, formData)

    return response.data
  } catch (error) {
    reportError({ error, service: 'sendEmailServices' })
    return {}
  }
}

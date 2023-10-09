import axios from 'axios'

export async function sendMessage(formData: FormData) {
  const EMAIL_API = process.env.EMAIL_SERVICE_API || ''
  const response = await axios.post(EMAIL_API, formData)

  if (response.status >= 400) return {}
  return response.data
}

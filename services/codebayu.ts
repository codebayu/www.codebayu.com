import axios from 'axios'

import { ICodeBayuData } from '@/common/types'

export async function getCodeBayuDataServices(): Promise<ICodeBayuData> {
  const URL = process.env.CODEBAYU_DATA
  try {
    const response = await axios.get(String(URL))
    if (response?.status !== 200) return {} as ICodeBayuData
    return response.data
  } catch (error) {
    reportError({ error, service: 'getCodeBayuDataServices' })
    return {} as ICodeBayuData
  }
}

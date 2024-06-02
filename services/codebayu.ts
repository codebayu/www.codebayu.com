import axios from 'axios'

import { CODEBAYU_SERVICE } from '@/common/constant'
import { getRequestHeader } from '@/common/helpers'
import { learnDto } from '@/common/helpers/dto'
import { ICodeBayuData, IResponseCodeBayuService } from '@/common/types'
import { IAdsBanner } from '@/common/types/ads'
import { ICareer } from '@/common/types/careers'
import { ILearn, ILearnCMS } from '@/common/types/learn'
import { IServices } from '@/common/types/services'

export async function getCodeBayuData(): Promise<ICodeBayuData> {
  const URL = process.env.CODEBAYU_DATA
  try {
    const response = await axios.get(String(URL))
    if (response?.status !== 200) return {} as ICodeBayuData
    return response.data
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
    return {} as ICodeBayuData
  }
}

export async function getPromotions(): Promise<IAdsBanner[]> {
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/promotion`, { headers })
  const data = response.data as IResponseCodeBayuService<IAdsBanner[]>
  if (data.statusCode !== 200) return []
  return data.data
}

export async function getLearns(): Promise<ILearn[]> {
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/learn`, { headers })
  const data = response.data as IResponseCodeBayuService<ILearnCMS[]>
  if (data.statusCode !== 200) return []
  return data.data.map(learnDto)
}

export async function getServices(): Promise<IServices[]> {
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/service`, { headers })
  const data = response.data as IResponseCodeBayuService<IServices[]>
  if (data.statusCode !== 200) return []
  return data.data
}

export async function getCareers(): Promise<ICareer[]> {
  const headers = getRequestHeader()
  const response = await axios.get(`${CODEBAYU_SERVICE}/career`, { headers })
  const data = response.data as IResponseCodeBayuService<ICareer[]>
  if (data.statusCode !== 200) return []
  return data.data
}

import { doc, getDoc } from 'firebase/firestore'

import { reportError } from '@/common/helpers/error'
import { firestore } from '@/common/libs/firebase'

export async function getRunningTextAdsServices() {
  try {
    const ref = doc(firestore, 'running_ads', 'text')
    const docSnap = await getDoc(ref)
    return docSnap.data()
  } catch (error) {
    reportError(error)
  }
}

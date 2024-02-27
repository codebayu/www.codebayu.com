import { DocumentData, collection, doc, getDoc, getDocs } from 'firebase/firestore'

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

export async function getBannerAdsServices() {
  try {
    const ref = collection(firestore, 'banner')
    const querySnapshot = await getDocs(ref)
    const data: DocumentData[] = []
    querySnapshot.forEach(doc => {
      const banner = doc.data()
      banner.id = doc.id
      if (banner.isShow) data.push(banner)
    })
    return data
  } catch (error) {
    reportError(error)
  }
}

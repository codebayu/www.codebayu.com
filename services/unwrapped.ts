import { DocumentData, collection, getDocs } from 'firebase/firestore'

import { reportError } from '@/common/helpers/error'
import { firestore } from '@/common/libs/firebase'

export async function getUnwrappedServices() {
  try {
    const ref = collection(firestore, 'github_unwrapped')
    const querySnapshot = await getDocs(ref)
    const data: DocumentData[] = []
    querySnapshot.forEach(doc => {
      const bookData = doc.data()
      bookData.id = doc.id
      data.push(bookData)
    })
    return data
  } catch (error) {
    reportError(error)
  }
}

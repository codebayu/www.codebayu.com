import { addDoc, collection } from 'firebase/firestore'

import { firestore } from '@/common/libs/firebase'

export async function reportErrorService(error: string) {
  try {
    await addDoc(collection(firestore, 'error'), {
      message: error
    })
  } catch (error) {
    console.log(error)
  }
}

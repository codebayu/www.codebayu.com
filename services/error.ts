import { addDoc, collection } from 'firebase/firestore'

import { firestore } from '@/common/libs/firebase'

export async function reportErrorService({ message, service }: { message: string; service: string }) {
  try {
    await addDoc(collection(firestore, 'error'), {
      message,
      service,
      date: new Date()
    })
  } catch (error) {
    console.log(error)
  }
}

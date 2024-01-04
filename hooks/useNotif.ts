import { useNotifStore } from '@/stores/notif'

export function useNotif() {
  const { showNotif, setNotifText } = useNotifStore()

  function notif(text: string) {
    setNotifText(text)
    showNotif()
  }

  return notif
}

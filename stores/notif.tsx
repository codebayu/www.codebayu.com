import { create } from 'zustand'

export interface InitialNotifState {
  isOpen: boolean
  text: string
}

export interface InitialNotifAction {
  showNotif(): void
  hideNotif(): void
  setNotifText(text: string): void
}

export const useNotifStore = create<InitialNotifState & InitialNotifAction>()(set => ({
  isOpen: false,
  text: '',
  showNotif: () => set({ isOpen: true }),
  hideNotif: () => set({ isOpen: false }),
  setNotifText: (text: string) => set({ text })
}))

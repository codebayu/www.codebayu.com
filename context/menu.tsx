import { create } from 'zustand';

export interface InitialModalState {
  isOpen: boolean;
  showMenu(): void;
  hideMenu(): void;
  toggleMenu(): void;
}

export const useMenu = create<InitialModalState>()(set => ({
  isOpen: false,
  showMenu: () => set({ isOpen: true }),
  hideMenu: () => set({ isOpen: false }),
  toggleMenu: () => set(prev => ({ isOpen: !prev.isOpen }))
}));

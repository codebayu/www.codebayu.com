import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface BlogViewState {
  viewOption: string
}
interface BlogViewAction {
  setViewOption: (option: string) => void
}

export const useBlogView = create<BlogViewState & BlogViewAction>()(
  devtools(
    persist(
      set => ({
        viewOption: 'grid',
        setViewOption: option => set(() => ({ viewOption: option }))
      }),
      {
        name: 'cb-blog-view'
      }
    )
  )
)

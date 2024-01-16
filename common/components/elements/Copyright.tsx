export default function Copyright({ isHover }: { isHover: boolean }) {
  return (
    <div className="font-sora flex items-center gap-1 px-3 py-1 text-sm text-neutral-600 dark:text-neutral-400">
      {isHover ? (
        <>
          <span>©</span>
          <span>{new Date().getFullYear()}</span>
          <span>with</span>
          <span data-testid="love" className="animate-pulse text-red-500">
            ❤
          </span>
          <span>by</span>
          <span className="cursor-pointer hover:dark:text-neutral-400">codebayu</span>
        </>
      ) : (
        <span data-testid="love" className="animate-pulse text-red-500">
          ❤
        </span>
      )}
    </div>
  )
}

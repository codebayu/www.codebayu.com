export default function Copyright() {
  return (
    <div className="flex items-center gap-1 text-sm py-1 px-3 text-neutral-600 dark:text-neutral-400 font-sora">
      <span>©</span>
      <span>{new Date().getFullYear()}</span>
      <span>with</span>
      <span className="text-red-500 animate-pulse">❤</span>
      <span>by</span>
      <span className="hover:dark:text-neutral-400 cursor-pointer">codebayu</span>
    </div>
  );
}

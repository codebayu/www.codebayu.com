interface PageHeadingProps {
  title: string
  description?: string
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <>
      <h1 className="font-sora 3xl:text-3xl text-2xl font-medium ">{title}</h1>
      <p className="3xl:text-lg mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </>
  )
}

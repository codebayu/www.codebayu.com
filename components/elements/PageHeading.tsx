interface PageHeadingProps {
  title: string
  description?: string
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <>
      <h1 className="font-sora text-2xl font-medium 3xl:text-3xl ">{title}</h1>
      <p className="mb-6 border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400 3xl:text-lg">
        {description}
      </p>
    </>
  )
}

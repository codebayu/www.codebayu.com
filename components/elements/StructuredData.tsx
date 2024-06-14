import Script from 'next/script'

import { Thing, WithContext } from 'schema-dts'

interface StructuredDataProps<T extends Thing> {
  data: WithContext<T>
}

export default function StructuredData<T extends Thing>({ data }: StructuredDataProps<T>) {
  return (
    <Script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      id="structured-data"
    />
  )
}
